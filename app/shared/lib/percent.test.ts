import { describe, expect, it } from 'vitest';
import { clamp, progressPercent } from './percent';

describe('clamp', () => {
  it('returns the value inside the range', () => {
    expect(clamp(3, 0, 4)).toBe(3);
  });

  it('caps at the bounds', () => {
    expect(clamp(-1, 0, 4)).toBe(0);
    expect(clamp(9, 0, 4)).toBe(4);
  });
});

describe('progressPercent', () => {
  it('maps the value onto 0..100', () => {
    expect(progressPercent(0, 0, 4)).toBe(0);
    expect(progressPercent(2, 0, 4)).toBe(50);
    expect(progressPercent(4, 0, 4)).toBe(100);
  });

  it('respects a non-zero minimum', () => {
    expect(progressPercent(15, 10, 20)).toBe(50);
  });

  it('clamps out-of-range values', () => {
    expect(progressPercent(10, 0, 4)).toBe(100);
    expect(progressPercent(-3, 0, 4)).toBe(0);
  });

  it('returns 0 for an empty range', () => {
    expect(progressPercent(5, 5, 5)).toBe(0);
  });
});
