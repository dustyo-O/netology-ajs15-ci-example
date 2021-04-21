import sum from '../basic';

test('basic 1 4 5', () => {
  const result = sum([1, 4, 5]);

  expect(result).toBe(10);
});

test('basic 1', () => {
  const result = sum([1]);

  expect(result).toBe(1);
});

test('basic -', () => {
  const result = sum([]);

  expect(result).toBe(0);
});
