const prompt = require("prompt-sync")();
let number = prompt("Enter The Limit : ");
let endPoint = Math.pow(2, number);

let result = 1; 

    while (result <= endPoint) {
        result *= 2;
        console.log(result);
    }
   