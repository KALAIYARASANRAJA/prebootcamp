 	
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
  //

  //tried with array function instead of direct printing
    for (i=0;i<userInput.length;i++)
    {
        var temparr=userInput[i].split(" ");
        var newarr=[];
        for (j=0;j<temparr.length;j++)
        {
            newarr.push(temparr[j]);
        }
        console.log(newarr.join(" "));
    }
  //end-here
});