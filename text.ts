#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk"

const randomnumber: number = Math.floor(10000 + Math.random() * 90000)
console.log(randomnumber);

let mybalance: number = 0
let answer = await inquirer.prompt([
    {
        name: "students",
        type: "input",
        message: chalk.blue.bold("enter the name:"),
        validate: function (value) {
            if (value.trim() !== "") {
                return true;
            }
            return "please enter a non-empty"
        }
    },
    {
        name: "courses",
        type: "list",
        message: chalk.blue.bold("select the course to enroll"),
        choices: ["ms office", "html", "javascript", "typescript", "python"]

    }
])
const tutionfee: { [key: string]: number } = {
    "ms office": 2000,
    "html": 2500,
    "typescript": 5000,
    "javascript": 6000,
    "python": 10000,
};

console.log(chalk.green.bold(`\nTuition fees:${tutionfee[answer.courses]}/-\n`))
console.log(`balance:${mybalance}\n`);

let paymenttype = await inquirer.prompt([
    {
        name: "payment",
        type: "list",
        message: chalk.blue.bold("select payment method"),
        choices: ["bank transfer", "easypaisa", "jazzcash"]
    },
    {
        name: "amount",
        type: "input",
        message: "transfer money",
        validate: function (value) {
            if (value.trim() !== "") {
                return true;
            }
            return "please enter a non-empty value.";
        }
    }
]);

console.log(chalk.blue.bold(`\nyou select payment method ${paymenttype.payment}`));

const tuitionfees = tutionfee[answer.courses];
const paymentamount = parseFloat(paymenttype.amount)

if (tuitionfees === paymentamount) {
    console.log(chalk.green.bold(`congratulation,you have successfully enroll in ${answer.courses}`));
    let answ = await inquirer.prompt([
        {
            name: "select",
            type: "list",
            message: chalk.blue.bold("would you like to exit?"),
            choices: [ "exit"]

        }
    ])
    if (answ.choices === "exit") {
        console.log("\n*****status****\n");
        console.log(`student name:${answer.students}`);
        console.log(`student id:${randomnumber}`);
        console.log(`course: ${answer.courses}`);
        console.log(`tuition fees paid: ${paymentamount}`);
        console.log(`balance:${mybalance += paymentamount}`);
    } else{
        console.log(chalk.yellow.bold("\n exiting student management system"));

    }
 }
  else{
    console.log(chalk.red.bold("invalid amount due to course\n"));

}








