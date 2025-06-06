const calculator = document.querySelector(".calculator");
const keys = calculator.querySelector(".calculator__keys");
const display = document.querySelector(".calculator__display");


const calculate = (n1, operator, n2) => {
  let result = "";

  if (operator === "add") {
    result = parseFloat(n1) + parseFloat(n2);
  } else if (operator === "subtract") {
    result = parseFloat(n1) - parseFloat(n2);
  } else if (operator === "multiply") {
    result = parseFloat(n1) * parseFloat(n2);
  } else if (operator === "divide") {
    result = parseFloat(n1) / parseFloat(n2);
  }

  return result;
};

keys.addEventListener("click", (e) => {
  if (e.target.matches("button")) {
    const key = e.target;
    const action = key.dataset.action;
    const displayedNum = display.textContent;
    const keyContent = key.textContent;
    const previousKeyType = calculator.dataset.previousKeyType;

    if (!action) {
      console.log("operator key!");
      if (displayedNum === "0" || previousKeyType === "operator") {
        display.textContent = keyContent;

        Array.from(key.parentNode.children).forEach((k) =>
          k.classList.remove("is-depressed")
        );
      } else {
        display.textContent = displayedNum + keyContent;
      }
    }

    if (
      action === "add" ||
      action === "subtract" ||
      action === "multiply" ||
      action === "divide"
    ) {
      console.log("operator key!");
      key.classList.add("is-depressed");

      calculator.dataset.firstValue = displayedNum;
      calculator.dataset.operator = action;
      calculator.dataset.previousKeyType = "operator";
    }

    if (action === "decimal") {
      console.log("decimal key!");
      display.textContent = displayedNum + ".";
    }

    if (action === "clear") {
      console.log("clear key!");
    }

    if (action === "calculate") {
      console.log("equal key!");
      const firstValue = calculator.dataset.firstValue;
      const operator = calculator.dataset.operator;
      const secondValue = displayedNum;

      display.textContent = calculate(firstValue, operator, secondValue);
    }

    if (action === "clear") {
      console.log("clear key!");
      display.textContent = "0";
    }
  }
});