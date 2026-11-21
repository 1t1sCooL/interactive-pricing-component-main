import { describe, expect, it } from 'vitest';
import { formatUsd } from './format-currency';

describe('formatUsd', () => {
  it('formats whole dollars with two decimals', () => {
    expect(formatUsd(16)).toBe('$16.00');
  });

  it('keeps cents', () => {
    expect(formatUsd(27)).toBe('$27.00');
    expect(formatUsd(6.5)).toBe('$6.50');
  });

  it('rounds to cents', () => {
    expect(formatUsd(1.005 + 0.001)).toBe('$1.01');
  });

  it('groups thousands', () => {
    expect(formatUsd(1234.5)).toBe('$1,234.50');
  });
});
