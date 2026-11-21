<script setup lang="ts">
import { PLAN_PERKS, PerkList, PriceTag } from '../../../entities/plan';
import { PageviewsSlider } from '../../../features/select-pageviews';
import { BillingToggle } from '../../../features/toggle-billing';
import { usePricing } from '../model/use-pricing';

const { tierIndex, billing, tier, price } = usePricing();
</script>

<template>
  <section class="pricing-card" aria-label="Pricing">
    <div class="pricing-card__body">
      <p class="pricing-card__views">{{ tier.pageviews }} Pageviews</p>
      <PriceTag class="pricing-card__price" :amount="price" />
      <PageviewsSlider v-model="tierIndex" class="pricing-card__slider" />
      <BillingToggle v-model="billing" class="pricing-card__billing" />
    </div>
    <div class="pricing-card__footer">
      <PerkList :perks="PLAN_PERKS" />
      <button class="pricing-card__cta" type="button">Start my trial</button>
    </div>
  </section>
</template>

<style scoped>
.pricing-card {
  width: 100%;
  max-width: 33.75rem;
  margin-inline: auto;
  border-radius: var(--radius-card);
  background-color: var(--white);
  box-shadow: var(--shadow-card);
}

.pricing-card__body {
  display: grid;
  grid-template-areas:
    'views price'
    'slider slider'
    'billing billing';
  grid-template-columns: 1fr auto;
  align-items: center;
  padding: 3rem 3rem 2.5625rem;
}

.pricing-card__views {
  grid-area: views;
  margin-left: -0.125rem;
  font-size: 0.875rem;
  font-weight: 800;
  line-height: 1.5;
  letter-spacing: 0.142em;
  text-transform: uppercase;
}

.pricing-card__price {
  grid-area: price;
}

.pricing-card__slider {
  grid-area: slider;
  margin-top: 1.9375rem;
}

.pricing-card__billing {
  grid-area: billing;
  margin-top: 2.4375rem;
}

.pricing-card__footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  padding: 2.0625rem 2.75rem 2rem 3rem;
  border-top: 1px solid var(--slate-200);
}

.pricing-card__cta {
  flex-shrink: 0;
  width: 10.625rem;
  height: 2.5rem;
  border: 0;
  border-radius: 1.25rem;
  background-color: var(--slate-800);
  color: var(--indigo-200);
  font-size: 0.75rem;
  font-weight: 800;
  cursor: pointer;
}

.pricing-card__cta:hover {
  color: var(--white);
}

@media (prefers-reduced-motion: no-preference) {
  .pricing-card__cta {
    transition: color 0.2s ease;
  }
}

@media (max-width: 47.9375em) {
  .pricing-card__body {
    grid-template-areas:
      'views'
      'slider'
      'price'
      'billing';
    grid-template-columns: 1fr;
    justify-items: stretch;
    padding: 2.125rem 1.5rem 2.375rem;
    text-align: center;
  }

  .pricing-card__views {
    margin-left: 0;
    font-size: 0.75rem;
    letter-spacing: 0.141em;
  }

  .pricing-card__slider {
    margin-top: 1.4375rem;
  }

  .pricing-card__price {
    margin-top: 1.875rem;
  }

  .pricing-card__billing {
    margin-top: 2.5rem;
  }

  .pricing-card__footer {
    flex-direction: column;
    gap: 2rem;
    padding: 1.625rem 1.5rem 2.0625rem;
  }
}
</style>
