const Calculator = require('./calculator');

test('calculator functions', () => {
  const calc = new Calculator(2, 4);
  expect(calc.add()).toBe(6);
  expect(calc.subtract()).toBe(-2);
  expect(calc.multiply()).toBe(8);
  expect(calc.divide()).toBe(0.5);
});