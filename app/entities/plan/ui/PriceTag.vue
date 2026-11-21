<script setup lang="ts">
import { computed } from 'vue';
import { formatUsd } from '../../../shared/lib/format-currency';

const props = defineProps<{ amount: number }>();

const formatted = computed(() => formatUsd(props.amount));
</script>

<template>
  <p class="price-tag" aria-live="polite">
    <span class="price-tag__amount">{{ formatted }}</span>
    <span class="price-tag__period"><span aria-hidden="true">/ </span>month</span>
  </p>
</template>

<style scoped>
.price-tag {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.price-tag__amount {
  font-size: 2.5rem;
  font-weight: 800;
  line-height: 1;
  letter-spacing: -0.025em;
  color: var(--slate-800);
}

.price-tag__period {
  font-size: 1rem;
  line-height: 1.5;
}

@media (max-width: 47.9375em) {
  .price-tag {
    justify-content: center;
  }

  .price-tag__amount {
    font-size: 2rem;
  }

  .price-tag__period {
    font-size: 0.875rem;
  }
}
</style>
