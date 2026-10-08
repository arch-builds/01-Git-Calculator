function calculate(operator) {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const resultElement = document.getElementById("result");

  if (isNaN(num1) || isNaN(num2)) {
    resultElement.textContent = "Result: Please enter both numbers.";
    return;
  }

  let result;

  if (operator === "+") {
    result = num1 + num2;
  } else if (operator === "-") {
    result = num1 - num2;
  } else if (operator === "*") {
    result = num1 * num2;
  } else if (operator === "/") {
    result = num2 === 0 ? "Cannot divide by zero" : num1 / num2;
  } else if (operator === "%") {
    result = num2 === 0 ? "Cannot divide by zero" : num1 % num2;
  }

  resultElement.textContent = "Result: " + result;
}

function clearCalculator() {
  document.getElementById("num1").value = "";
  document.getElementById("num2").value = "";
  document.getElementById("result").textContent = "Result:";
}