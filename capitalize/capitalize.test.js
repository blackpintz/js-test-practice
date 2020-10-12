import capFunction from './capitalize';

test('capitalize string', () => {
  expect(capFunction('hello')).toBe('Hello');
});