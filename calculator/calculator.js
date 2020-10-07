function Calculator(a, b) {
  this.add = () => a + b;
  this.subtract = () => a - b;
  this.multiply = () => a * b;
  this.divide = () => a / b;
}

module.exports = Calculator;