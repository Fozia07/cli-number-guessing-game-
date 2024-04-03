#! /usr/bin/env node

import inquirer from "inquirer";
//1 computer will gernate a rendom number
//2 userinput for guessing number
//3 compare user input with computer gernate number and show number

const randomNumber =Math.floor(Math.random() *6+1);
const answers = await inquirer.prompt([
    {name: "userGuessNumber",
     type:"number" ,
    massage:"please guess number:"}
]);
 

if (answers.userGuessNumber === randomNumber){
    console.log("Congratulation you won")
}
else {
    console.log("you loss")
}