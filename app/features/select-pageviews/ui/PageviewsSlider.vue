<script setup lang="ts">
import { computed } from 'vue';
import RangeSlider from '../../../shared/ui/range-slider/RangeSlider.vue';
import { PRICING_TIERS, tierAt, toTierIndex } from '../../../entities/plan';

const tierIndex = defineModel<number>({ required: true });

const value = computed({
  get: () => tierIndex.value,
  set: (next: number) => {
    tierIndex.value = toTierIndex(next);
  },
});

const valueText = computed(() => `${tierAt(tierIndex.value).pageviews} pageviews`);
</script>

<template>
  <RangeSlider
    v-model="value"
    class="pageviews-slider"
    :max="PRICING_TIERS.length - 1"
    :value-text="valueText"
    aria-label="Monthly pageviews"
  />
</template>
