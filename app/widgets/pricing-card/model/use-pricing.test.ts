import { describe, expect, it } from 'vitest';
import { usePricing } from './use-pricing';

describe('usePricing', () => {
  it('starts at 100K pageviews billed monthly', () => {
    const { tierIndex, billing, tier, price } = usePricing();

    expect(tierIndex.value).toBe(2);
    expect(billing.value).toBe('monthly');
    expect(tier.value.pageviews).toBe('100K');
    expect(price.value).toBe(16);
  });

  it('accepts a custom initial state', () => {
    const { tier, price } = usePricing(4, 'yearly');

    expect(tier.value.pageviews).toBe('1M');
    expect(price.value).toBe(27);
  });

  it('recomputes the price when the tier changes', () => {
    const { tierIndex, price } = usePricing();
    tierIndex.value = 0;

    expect(price.value).toBe(8);
  });

  it('recomputes the price when billing changes', () => {
    const { billing, price } = usePricing();
    billing.value = 'yearly';

    expect(price.value).toBe(12);
  });

  it('keeps instances independent', () => {
    const a = usePricing();
    const b = usePricing();
    a.tierIndex.value = 4;

    expect(b.price.value).toBe(16);
  });
});
