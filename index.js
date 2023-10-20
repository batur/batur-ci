#!/usr/bin/env node

import figlet from "figlet";
import prompts from "prompts";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";

function renderHeader(title = "Batur") {
  return console.log(
    chalk.hex("#E4111F").bold(
      figlet.textSync(title, {
        font: "Cyberlarge",
      })
    )
  );
}

async function renderDescription() {
  return console.log(`${chalk.bold("Hi")}, I'm Batur 👋
Just developer, software and other things.

${chalk.italic("aka Pax Tartarica")}
${chalk.italic("Currently working at SHFT as")} ${chalk.bold("Tech Lead")}
  `);
}

function renderFooter() {
  return console.log(chalk.bold.italic.gray("NEC SPE NEC METU"), "\n\n");
}

function renderPrompts() {
  return;
}

function main() {
  renderHeader();
  renderDescription();
  renderFooter();
  renderPrompts();
}

main();
