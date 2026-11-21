import { describe, expect, it } from 'vitest';
import {
  DEFAULT_TIER_INDEX,
  PLAN_PERKS,
  PRICING_TIERS,
  YEARLY_DISCOUNT,
  discountLabel,
  priceFor,
  tierAt,
  toTierIndex,
} from './pricing';

describe('pricing tiers', () => {
  it('match the challenge table', () => {
    expect(PRICING_TIERS.map((t) => [t.pageviews, t.monthlyPrice])).toEqual([
      ['10K', 8],
      ['50K', 12],
      ['100K', 16],
      ['500K', 24],
      ['1M', 36],
    ]);
  });

  it('default to 100K pageviews', () => {
    expect(PRICING_TIERS[DEFAULT_TIER_INDEX]?.pageviews).toBe('100K');
  });

  it('list three perks', () => {
    expect(PLAN_PERKS).toEqual(['Unlimited websites', '100% data ownership', 'Email reports']);
  });
});

describe('toTierIndex', () => {
  it('rounds fractional slider values', () => {
    expect(toTierIndex(1.4)).toBe(1);
    expect(toTierIndex(1.6)).toBe(2);
  });

  it('clamps to the available tiers', () => {
    expect(toTierIndex(-2)).toBe(0);
    expect(toTierIndex(99)).toBe(PRICING_TIERS.length - 1);
  });
});

describe('tierAt', () => {
  it('returns the tier for a valid index', () => {
    expect(tierAt(0)).toBe(PRICING_TIERS[0]);
    expect(tierAt(4)).toBe(PRICING_TIERS[4]);
  });

  it('never returns undefined for out-of-range input', () => {
    expect(tierAt(42)).toBe(PRICING_TIERS[PRICING_TIERS.length - 1]);
  });
});

describe('priceFor', () => {
  it('returns the monthly price for monthly billing', () => {
    expect(PRICING_TIERS.map((t) => priceFor(t, 'monthly'))).toEqual([8, 12, 16, 24, 36]);
  });

  it('applies the 25% discount for yearly billing', () => {
    expect(YEARLY_DISCOUNT).toBe(0.25);
    expect(PRICING_TIERS.map((t) => priceFor(t, 'yearly'))).toEqual([6, 9, 12, 18, 27]);
  });
});

describe('discountLabel', () => {
  it('formats the default discount', () => {
    expect(discountLabel()).toBe('25%');
  });

  it('formats a custom discount', () => {
    expect(discountLabel(0.1)).toBe('10%');
  });
});
