const reverseFunction = require('./reverse');

test('reverse string', () => {
  expect(reverseFunction('hello')).toBe('olleh');
});