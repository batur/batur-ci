#!/usr/bin/env node

import figlet from "figlet";
import prompts from "prompts";
import chalk from "chalk";
import open from "open";

function renderHeader(title = "Batur 👋") {
  return console.log(
    chalk.hex("#E4111F").bold(
      figlet.textSync(title, {
        font: "Cyberlarge",
      })
    )
  );
}

async function renderDescription() {
  return console.log(`Just developer, software and other things.

${chalk.italic("aka Pax Tartarica")}
${chalk.italic("Currently working at SHFT as")} ${chalk.bold("Tech Lead")}
  `);
}

function renderFooter() {
  return console.log(chalk.bold.italic.gray("NEC SPE NEC METU"), "\n");
}

function renderPrompts() {
  return prompts({
    type: "select",
    name: "value",
    message: "What do you want to do?",
    choices: [
      { title: "🌐 Website", value: "https://www.batur.io/" },
      {
        title: "📃 Curriculum Vitae",
        value: "https://linkedin.com/in/ta2ulk/",
      },
      {
        title: "💻 GitHub",
        value: "https://github.com/batur",
      },
      {
        title: "✖️  Twitter",
        value: "https://twitter.com/ta2ulk",
      },
      {
        title: "📓 Medium",
        value: "https://medium.com/@ta2ulk",
      },
    ],
  }).then((response) => {
    if (response.value) {
      return open(response.value);
    }
  });
}

function main() {
  renderHeader();
  renderDescription();
  renderFooter();
  renderPrompts();
}

main();
