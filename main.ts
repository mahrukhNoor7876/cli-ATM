#! /usr/bin/env node

import inquirer from  "inquirer";
let myBalance=10000;
let myPin=1234;
let pinAnswer=await inquirer.prompt(
    [
        {
            name:"pin",
            message:"Enter your pin: ",
            type:"number"
        }
    ]
);
if(pinAnswer.pin === myPin){
    let operationAns=await inquirer.prompt(
        [
            {
                name:"operation",
                message:"Please select option ",
                type:"list",
                choices:["Withdraw","Check Balance"]
            }
        ]
    );
    if(operationAns.operation === "Withdraw"){
        let amountAns=await inquirer.prompt(
            [
                {
                    name:"amount",
                    message:"How much amount you want to withdraw: ",
                    type:"list",
                    choices:[1000,2000,5000,10000]
                }
            ]
        );
        if(amountAns.amount <= myBalance){
            myBalance-=amountAns.amount;
            console.log(`Your remaining balance is: ${myBalance}`);
        }
        else{
            console.log("Your account has less amount than your withdraw amount!");
        }
    }
    else if(operationAns.operation === "Check Balance"){
       console.log(`Your balance is: ${myBalance}`); 
    }
    else{
        console.log("Please select valid option!");
    }
}
else{
    console.log("Incorrect pin number");
}