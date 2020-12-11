
// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic 
  var str="";
  for (i=0;i<userInput.length;i++)
  {
      str+=userInput[i]+" ";
  }
  console.log(str.trim());
  //end-here
});