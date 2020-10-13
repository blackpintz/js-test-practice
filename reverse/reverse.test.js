import reverseFunction from './reverse';

test('reverse string', () => {
  expect(reverseFunction('hello')).toBe('olleh');
});