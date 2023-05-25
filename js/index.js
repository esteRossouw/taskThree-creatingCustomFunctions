function calculate() {
    var input1 = parseFloat(document.getElementById("input1").value);
    var input2 = parseFloat(document.getElementById("input2").value);
    var operation = document.getElementById("operation").value;
    var result;
  
    if (isNaN(input1) || isNaN(input2)) {
      document.getElementById("result").innerHTML = "Invalid input";
      return;
    }
  
    if (operation === "add") {
      result = input1 + input2;
    } else if (operation === "subtract") {
      result = input1 - input2;
    } else if (operation === "multiply") {
      result = input1 * input2;
    } else if (operation === "divide") {
      if (input2 === 0) {
        document.getElementById("result").innerHTML = "Cannot divide by zero";
        return;
      }
      result = input1 / input2;
    } else {
      document.getElementById("result").innerHTML = "Invalid operation";
      return;
    }
  
    document.getElementById("result").innerHTML = "Result: " + result;
}
  