let capitalizeString = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

let reverseString = (string) => {
    return string.split("").reverse().join("");
}

function Calculator (a,b) {
  this.add = () => a + b;
  this.subtract = () => a - b;
  this.multiply = () => a * b;
  this.divide = () => a / b;
}

let calc = new Calculator(4,8)
