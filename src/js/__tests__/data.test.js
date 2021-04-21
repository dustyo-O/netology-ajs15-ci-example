import calculateCashback from '../data';

test('calculateCashback 1000000', () => {
  const result = calculateCashback(1000000);

  expect(result).toBe(50000);
});

test('calculateCashback 100000', () => {
  const result = calculateCashback(100000);

  expect(result).toBe(5000);
});

test('calculateCashback 50000', () => {
  const result = calculateCashback(50000);

  expect(result).toBe(1000);
});

test('calculateCashback 10000', () => {
  const result = calculateCashback(10000);

  expect(result).toBe(200);
});

test('calculateCashback 5000', () => {
  const result = calculateCashback(5000);

  expect(result).toBe(50);
});

test('calculateCashback 1000', () => {
  const result = calculateCashback(1000);

  expect(result).toBe(10);
});

test('calculateCashback 100', () => {
  const result = calculateCashback(100);

  expect(result).toBe(0);
});
