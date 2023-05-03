#! /usr/bin/env node

import inquirer from "inquirer";
import figlet from "figlet";
import chalk from "chalk";
import { sum, subtract, multiply, division } from "./operations.js";

const welCome = async () => {
  console.log(figlet.textSync("CalculatorBySS."));

  const input = await inquirer.prompt([
    {
      type: "number",
      name: "num1",
      message: "Enter first number",
    },
    {
      type: "number",
      name: "num2",
      message: "Enter Second number",
    },
    {
      type: "list",
      name: "operation",
      message: "Select your operation",
      choices: ["+", "-", "*", "/"],
    },
  ]);

  if (input.operation === "+") {
    const result = sum(input.num1, input.num2);
    console.log(chalk.bgBlue(`result:${result}`));
  } else if (input.operation === "-") {
    const result = subtract(input.num1, input.num2);
    console.log(chalk.bgBlue(`result:${result}`));
  } else if (input.operation === "*") {
    const result = multiply(input.num1, input.num2);
    console.log(chalk.bgBlue(`result:${result}`));
  } else if (input.operation === "/") {
    const result = division(input.num1, input.num2);
    console.log(chalk.bgBlue(`result:${result}`));
  } else {
    console.log("Invalid operation");
  }
};

await welCome();