const calculateTerm = term => {
  let numbers =[];
  term.split("*").forEach(elm => {
    numbers = [...numbers, ...elm.split("/")]
  });



let result = 1;
numbers.forEach(currentNumber => {
  const splittedNumber = term.split(currentNumber)[0];
  const sign = splittedNumber[splittedNumber.length-1];
  if(sign === "/") {
    result /= parseInt(currentNumber, 10);
  }
  else {
    result *= parseInt(currentNumber, 10);
  }
})
return result;
}
const calculateResult = expression => {
  let terms =[];
  expression.split("+").forEach(elm => {
  terms = [...terms, ...elm.split("-")];
});
  let result = 0;
  terms.forEach(currentTerm => {
    const splittedTerm = expression.split(currentTerm)[0];
    const sign = splittedTerm[splittedTerm.length-1];
    if(sign === "-") {
      result -= calculateTerm(currentTerm);
    }
    else {
      result += calculateTerm(currentTerm);
    }
  })
  return result;
}
const textField = document.getElementById("expression-field");
const buttons = document.querySelectorAll('.button-group button:not(.long-button)');
const equalsButton = document.getElementById("equals");
buttons.forEach(currentButton => {
  currentButton.addEventListener('click', event => {
    if (textField.value === '0') {
      textField.value = currentButton.innerText;
    } else {
      textField.value += currentButton.innerText;
    }
  })
})

equalsButton.addEventListener('click', event => {
  textField.value = calculateResult(textField.value);
})
