import Add from "./sum.js";
import Subtract from "./subtraction.js";
import Multiply from "./multiplication.js";
import Divide from "./division.js";
import inquirer from "inquirer";
import chalk from "chalk";
let calculator = await inquirer.prompt([
    {
        name: "Number1",
        type: "number",
        message: chalk.bgMagenta("Enter the first number"),
    },
    {
        name: "Number2",
        type: "number",
        message: chalk.bgMagenta("Enter the second number"),
    },
    {
        name: "Operation",
        type: "list",
        message: chalk.underline("Enter the operation"),
        choices: [chalk.red("Addition"), chalk.blue("Subtraction"), chalk.green("Multiplication"), chalk.yellow("Division")],
    },
]);
switch (calculator.Operation) {
    case chalk.red("Addition"):
        console.log(`Your result ${Add(calculator.Number1, calculator.Number2)}`);
        break;
    case chalk.blue("Subtraction"):
        console.log(`Your result ${Subtract(calculator.Number1, calculator.Number2)}`);
        break;
    case chalk.green("Multiplication"):
        console.log(`Your result ${Multiply(calculator.Number1, calculator.Number2)}`);
        break;
    case chalk.yellow("Division"):
        console.log(`Your result ${Divide(calculator.Number1, calculator.Number2)}`);
        break;
}
