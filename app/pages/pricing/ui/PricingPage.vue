<script setup lang="ts">
import { PricingCard } from '../../../widgets/pricing-card';
import { PricingHeader } from '../../../widgets/pricing-header';
</script>

<template>
  <main class="pricing-page">
    <PricingHeader />
    <PricingCard />
  </main>
</template>

<style scoped>
.pricing-page {
  position: relative;
  isolation: isolate;
  min-height: 100vh;
  padding: 0 1.5rem 8.5rem;
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

@media (max-width: 47.9375em) {
  .pricing-page {
    padding-bottom: 5.5rem;
  }

  .pricing-page::before {
    height: 25rem;
    border-bottom-left-radius: 11.875rem;
  }
}
</style>
