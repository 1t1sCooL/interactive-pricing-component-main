<script setup lang="ts">
import { PricingCard } from '../../../widgets/pricing-card';
import { PricingHeader } from '../../../widgets/pricing-header';
import { SiteFooter } from '../../../widgets/site-footer';
</script>

<template>
  <div class="pricing-page">
    <main class="pricing-page__main">
      <PricingHeader />
      <PricingCard />
    </main>
    <SiteFooter class="pricing-page__footer" />
  </div>
</template>

<style scoped>
.pricing-page {
  position: relative;
  isolation: isolate;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding-inline: 1.5rem;
}

.pricing-page::before {
  content: '';
  position: absolute;
  inset: 0 0 auto;
  z-index: -1;
  height: 28.0625rem;
  border-bottom-left-radius: 11.96875rem;
  background-color: var(--slate-100);
}

.pricing-page__footer {
  margin-top: auto;
  padding-top: 2.5rem;
}

@media (max-width: 47.9375em) {
  .pricing-page::before {
    height: 25rem;
    border-bottom-left-radius: 11.875rem;
  }

  .pricing-page__footer {
    padding-top: 2rem;
  }
}
</style>
