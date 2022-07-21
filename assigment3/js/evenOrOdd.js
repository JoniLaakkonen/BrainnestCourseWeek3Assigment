//program that accepts two integers and displays if the given number is even or odd
let firstNumber = parseInt(prompt('Enter a valid number')); 
//Prompt is used to take inpt from user and pasreInt is used to change them from string to integer 
if(firstNumber & 1){
    console.log("Given number " + firstNumber + " is odd");
}
else if(!(firstNumber & 1)){
    console.log("Given number " + firstNumber + " is even");
}