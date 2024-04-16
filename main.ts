#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

const currency: any = {
    USD: 1, // base currency
    EUR: 0.91,
    GBP:0.76,
    INR:74.57,
    PKR:280,
    DIN:40
};


let userAns= await inquirer.prompt(
    [
    {
   
    name:"from",
    message: chalk.bgBlue.bold("Enter from Currency"),
    type: "list",
    choices:["USD","EUR","GBP","INR","PKR","DIN"]

},

{
   
    name:"to",
    message: chalk.bgGreenBright.bold("Enter To Currency"),
    type: "list",
    choices:["USD","EUR","GBP","INR","PKR","DIN"]

},
{
    name:"amount",
    message: chalk.bgGray("Enter Your Amount"),
    type:"number"
},


])

let fromAmount= currency[userAns.from]// exchange rate
let toAmount= currency[userAns.to]// exchange rate
let amount= userAns.amount
let baseAmount= amount / fromAmount // USD base currency // 4 doller
let convertedAmount= baseAmount * toAmount
console.log(convertedAmount);
// console.log(baseAmount);
// console.log(fromAmount);
// console.log(toAmount);
// console.log(amount);

