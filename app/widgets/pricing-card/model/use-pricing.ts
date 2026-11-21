import { computed, ref } from 'vue';
import {
  DEFAULT_TIER_INDEX,
  priceFor,
  tierAt,
  type BillingPeriod,
} from '../../../entities/plan';

export const usePricing = (initialTier: number = DEFAULT_TIER_INDEX, initialBilling: BillingPeriod = 'monthly') => {
  const tierIndex = ref(initialTier);
  const billing = ref<BillingPeriod>(initialBilling);

  const tier = computed(() => tierAt(tierIndex.value));
  const price = computed(() => priceFor(tier.value, billing.value));

  return { tierIndex, billing, tier, price };
};
