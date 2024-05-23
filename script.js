function parsed(data) {
  return parseFloat(prompt(data))
}

function add(){
  const firstNumber = parsed('Enter the first number:');
  const secondNumber = parsed('Enter the second number:');
  const result = firstNumber + secondNumber;
  alert("The result is: " + result);
}

function subtract(){
  const firstNumber = parsed('Enter the first number:');
  const secondNumber = parsed('Enter the second number:');
  const result = firstNumber - secondNumber;
  alert("The result is: " + result);
}

function multiply(){
  const firstNumber = parsed('Enter the first number:');
  const secondNumber = parsed('Enter the second number:');
  const result = firstNumber * secondNumber;
  alert("The result is: " + result);
}

function divide(){
  const firstNumber = parsed('Enter the first number:');
  const secondNumber = parsed('Enter the second number:');
  const result = firstNumber / secondNumber;
  alert("The result is: " + result);
}

function simpleInterest(){
  const principal = parsed('Enter the principal:');
  const rate = parsed('Enter the rate:') / 100;
  const years = parsed('Enter the number of years:');
  const result = (principal * rate * years).toFixed(2);
  alert("With an initial investment of $" + principal + " at " + rate * 100 + "% interest rate for " + years + " year(s), the total interest will be $" + result + ".");
}

function compoundInterest(){
  const principal = parsed('Enter the principal:');
  const rate = parsed('Enter the rate:') / 100;
  const years = parsed('Enter the number of years:');
  const result = (principal * ((1 + rate) ** years)).toFixed(2);
  alert("With an initial investment of $" + principal + " at " + rate * 100 + "% interest rate for " + years + " year(s), the final amount will be $" + result + ".");
}