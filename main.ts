#! /usr/bin/env node
import inquirer from "inquirer";

console.log("\n\tWelcome to CodeWithMaria - CLI Number Guessing Game\n");



const randomNumber = Math.floor(Math.random() * 5 + 1);
 
const answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Enter your guess number(Number limit from 1 to 5):",
    },
]);

if(answer.userGuessedNumber === randomNumber){
    console.log("Congralution ! You guess a correct number.");
}
else{
    console.log("Sorry ! You guess a wrong number");
}