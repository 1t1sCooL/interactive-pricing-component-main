import { clamp } from '../../../shared/lib/percent';

export type BillingPeriod = 'monthly' | 'yearly';

export interface PricingTier {
  readonly pageviews: string;
  readonly monthlyPrice: number;
}

export const PRICING_TIERS: readonly PricingTier[] = [
  { pageviews: '10K', monthlyPrice: 8 },
  { pageviews: '50K', monthlyPrice: 12 },
  { pageviews: '100K', monthlyPrice: 16 },
  { pageviews: '500K', monthlyPrice: 24 },
  { pageviews: '1M', monthlyPrice: 36 },
];

export const DEFAULT_TIER_INDEX = 2;

export const YEARLY_DISCOUNT = 0.25;

export const PLAN_PERKS: readonly string[] = [
  'Unlimited websites',
  '100% data ownership',
  'Email reports',
];

export const toTierIndex = (value: number): number =>
  clamp(Math.round(value), 0, PRICING_TIERS.length - 1);

export const tierAt = (value: number): PricingTier =>
  PRICING_TIERS[toTierIndex(value)] as PricingTier;

export const priceFor = (tier: PricingTier, billing: BillingPeriod): number =>
  billing === 'yearly' ? tier.monthlyPrice * (1 - YEARLY_DISCOUNT) : tier.monthlyPrice;

export const discountLabel = (discount: number = YEARLY_DISCOUNT): string =>
  `${Math.round(discount * 100)}%`;
