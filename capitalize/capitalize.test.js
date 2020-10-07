const capFunction = require('./capitalize');

test('capitalize string', () => {
  expect(capFunction('hello')).toBe('Hello');
});