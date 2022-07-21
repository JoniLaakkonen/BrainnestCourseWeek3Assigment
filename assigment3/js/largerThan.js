    //program that accepts two integers and displays the larger of the two
    let firstNumber = parseInt(prompt('Enter the first number ')); 
    let secondNumber = parseInt(prompt('Enter the second number ')); 
    //Prompt is used to take inpt from user and pasreInt is used to change them from string to integer 
    try{
        if(!Number.isInteger(firstNumber) || !Number.isInteger(secondNumber)){
            console.log("Some of given numbers are not valid.");
            process.exit(1);
        }
    }   catch (error) {
        console.log(error);
    }
    //Condition to check is numbers are equal
    if(firstNumber==secondNumber){
        console.log("Numbers are equal");
    }
    //Condition to check if first number is greater
    else if(firstNumber>secondNumber){
        console.log("First number is greater");
    }
    //If none from above, second number is greater
    else if (firstNumber<secondNumber){
    console.log("Second number is greater");
    }