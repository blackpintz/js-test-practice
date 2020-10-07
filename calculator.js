function Calculator(a, b) {
  this.add = () => a + b;
  this.subtract = () => a - b;
  this.multiply = () => a * b;
  this.divide = () => a / b;
}

const calc = new Calculator(4, 8);

calc.add();