import cipherFunc from './cipher';

it('checks wrapping from z to a', () => {
  expect(cipherFunc('zoo', 1)).toBe('app');
});

it('keeps the same case', () => {
  expect(cipherFunc('leAf', 1)).toBe('mfBg');
});

it('keeps punctuations the same', () => {
  expect(cipherFunc('zoo!?', 1)).toBe('app!?');
});