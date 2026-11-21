<script setup lang="ts">
import { computed, useId } from 'vue';
import ToggleSwitch from '../../../shared/ui/toggle-switch/ToggleSwitch.vue';
import { discountLabel, type BillingPeriod } from '../../../entities/plan';

const billing = defineModel<BillingPeriod>({ required: true });

const switchId = useId();
const badgeId = useId();

const isYearly = computed({
  get: () => billing.value === 'yearly',
  set: (yearly: boolean) => {
    billing.value = yearly ? 'yearly' : 'monthly';
  },
});

const discount = discountLabel();
</script>

<template>
  <div class="billing-toggle">
    <span class="billing-toggle__monthly">Monthly Billing</span>
    <ToggleSwitch :id="switchId" v-model="isYearly" :aria-describedby="badgeId" />
    <span class="billing-toggle__yearly">
      <label class="billing-toggle__label" :for="switchId">Yearly Billing</label>
      <span :id="badgeId" class="billing-toggle__badge">
        <span class="billing-toggle__badge-long">{{ discount }} discount</span>
        <span class="billing-toggle__badge-short" aria-hidden="true">-{{ discount }}</span>
      </span>
    </span>
  </div>
</template>

<style scoped>
.billing-toggle {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.0625rem;
  font-size: 0.75rem;
  line-height: 1.5;
}

.billing-toggle__monthly {
  white-space: nowrap;
}

.billing-toggle__yearly {
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.4375rem;
}

.billing-toggle__label {
  white-space: nowrap;
  cursor: pointer;
}

.billing-toggle__badge {
  position: absolute;
  left: calc(100% + 0.625rem);
  padding: 0.125rem 0.375rem;
  border-radius: 0.5625rem;
  background-color: var(--orange-100);
  color: var(--orange-400);
  font-size: 0.625rem;
  font-weight: 800;
  line-height: 1.4;
  white-space: nowrap;
}

.billing-toggle__badge-short {
  display: none;
}

@media (max-width: 47.9375em) {
  .billing-toggle {
    display: grid;
    grid-template-columns: minmax(0, 1fr) auto minmax(0, 1fr);
    gap: 0.75rem;
  }

  .billing-toggle__monthly {
    justify-self: end;
  }

  .billing-toggle__badge {
    position: static;
  }

  .billing-toggle__badge-long {
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
    clip-path: inset(50%);
    white-space: nowrap;
  }

  .billing-toggle__badge-short {
    display: inline;
  }
}

@media (max-width: 23.375em) {
  .billing-toggle {
    gap: 0.5rem;
  }

  .billing-toggle__yearly {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.25rem;
  }
}
</style>
