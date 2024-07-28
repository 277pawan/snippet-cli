#!/usr/bin/env node

import chalk from "chalk";
import { program } from "commander";
import inquirer from "inquirer";
import ora from "ora";
import clipboardy from "clipboardy";
import figlet from "figlet";
import AutocompletePrompt from "inquirer-autocomplete-prompt";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

inquirer.registerPrompt("autocomplete", AutocompletePrompt);

// Determine the directory of the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Function to ensure the file exists in the project root directory
const ensureFileExists = (fileName) => {
  const projectRoot = process.cwd(); // Get the project's root directory
  const targetFilePath = path.join(projectRoot, fileName);
  console.log(`Ensuring file exists at: ${targetFilePath}`);
  if (!fs.existsSync(targetFilePath)) {
    let sourceFilePath;
    if (fileName.endsWith("Ufields.md")) {
      sourceFilePath = path.join(__dirname, "fields.md");
    } else if (fileName.endsWith("Usnippets.md")) {
      sourceFilePath = path.join(__dirname, "snippets.md");
    }

    if (sourceFilePath && targetFilePath) {
      fs.copyFileSync(sourceFilePath, targetFilePath);
      console.log(chalk.green(`File ${fileName} created at ${targetFilePath}`));
    } else {
      console.error(chalk.redBright(`Error while creating ${fileName}`));
    }
  }
};

const fsSearchField = async (answersSoFar, input) => {
  ensureFileExists("Ufields.md");

  const projectRoot = process.cwd(); // Get the project's root directory
  const filePath = path.join(projectRoot, "Ufields.md");

  return new Promise((resolve, reject) => {
    fs.readFile(filePath, "utf-8", (err, data) => {
      if (err) {
        console.log(err);
        reject(err);
        return;
      }
      const lines = data.split("\n").filter((line) => line.includes("##"));
      const fields = lines.map((line) => line.slice(2).trim());
      resolve(
        fields.filter(
          (field) => !input || field.toLowerCase().includes(input.toLowerCase())
        )
      );
    });
  });
};

const fsSearchSnippet = async (fieldvalue, input) => {
  ensureFileExists("Usnippets.md");
  ensureFileExists("Ufields.md");

  const projectRoot = process.cwd(); // Get the project's root directory
  const filePath = path.join(projectRoot, "Usnippets.md");

  return new Promise((resolve, reject) => {
    fs.readFile(filePath, "utf-8", (err, data) => {
      if (err) {
        console.log(err);
        reject(err);
        return;
      }
      const lines = data
        .split("\n")
        .filter((line) =>
          line.includes(
            `## ${fieldvalue.slice(fieldvalue.length - 2, fieldvalue.length)}`
          )
        );
      const snippets = lines.map((line) => line.slice(2).trim());
      resolve(
        snippets.filter(
          (snippet) =>
            !input || snippet.toLowerCase().includes(input.toLowerCase())
        )
      );
    });
  });
};

const findSnippetCode = async (subfield) => {
  ensureFileExists("Usnippets.md");

  const projectRoot = process.cwd(); // Get the project's root directory
  const filePath = path.join(projectRoot, "Usnippets.md");

  return new Promise((resolve, reject) => {
    fs.readFile(filePath, "utf-8", (err, data) => {
      if (err) {
        console.log(err);
        reject(err);
        return;
      }
      const lines = data.split("\n");
      let foundSnippet = false;
      let snippetCode = "";
      for (let i = 0; i < lines.length; i++) {
        if (lines[i].includes(`## ${subfield}`)) {
          foundSnippet = true;
          i++;
          while (i < lines.length && !lines[i].includes("##")) {
            snippetCode += lines[i] + "\n";
            i++;
          }
          break;
        }
      }
      if (foundSnippet) {
        resolve(snippetCode.trim());
      } else {
        reject(`Snippet for subfield ${subfield} not found.`);
      }
    });
  });
};

const resetProgram = () => {
  const projectRoot = process.cwd(); // Get the project's root directory
  const targetFiles = [
    path.join(projectRoot, "Usnippets.md"),
    path.join(projectRoot, "Ufields.md"),
  ];
  targetFiles.forEach((file) => {
    if (fs.existsSync(file)) {
      fs.unlink(file, function (err) {
        if (err) throw err;
      });
    }
  });
  console.log("Program reset");
  console.log("Happy Coding(-_-)");
};

const runCli = async () => {
  let exitFlag = false;
  let userName = "";

  while (!exitFlag) {
    if (!userName) {
      const { name } = await inquirer.prompt([
        {
          type: "input",
          name: "name",
          message: "What's your name?",
        },
      ]);
      userName = name;
    }

    const { field } = await inquirer.prompt([
      {
        type: "autocomplete",
        name: "field",
        message: "Choose a field",
        source: fsSearchField,
      },
    ]);

    const { subfield } = await inquirer.prompt([
      {
        type: "autocomplete",
        name: "subfield",
        message: "Select Subfield",
        source: (answersSoFar, input) => fsSearchSnippet(field, input),
      },
    ]);

    console.log(chalk.magentaBright(`Hey there ${userName}!`));
    console.log(chalk.magentaBright(`Selected field: ${field}`));
    console.log(chalk.magenta(`Selected sub-field: ${subfield}`));

    const spinner = ora("Finding snippet code...").start();
    try {
      const snippetCode = await findSnippetCode(subfield);
      spinner.succeed("Snippet code found:");
      console.log(chalk.greenBright(snippetCode));
      clipboardy.writeSync(snippetCode);
    } catch (err) {
      spinner.fail("Failed to find snippet code.");
      console.log(chalk.red(err));
    }

    const { continueProgram } = await inquirer.prompt([
      {
        type: "confirm",
        name: "continueProgram",
        message: "Would you like to search for another snippet?",
      },
    ]);

    if (!continueProgram) {
      exitFlag = true;
    }
  }
};

console.log(
  chalk.magentaBright(
    figlet.textSync("Snippets-CLI.", { horizontalLayout: "full" })
  )
);

program.version("1.0.0").description("JsDoc Generator CLI");
program
  .command("reset")
  .description("Reset the Snippet Cli program.")
  .action(() => {
    resetProgram();
  });
program.action(async () => {
  await runCli();
});

program.parse(process.argv);
