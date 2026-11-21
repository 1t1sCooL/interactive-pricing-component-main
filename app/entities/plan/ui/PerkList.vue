<script setup lang="ts">
import IconCheck from '../../../shared/ui/icons/IconCheck.vue';

defineProps<{ perks: readonly string[] }>();
</script>

<template>
  <ul class="perk-list" role="list">
    <li v-for="perk in perks" :key="perk" class="perk-list__item">
      <IconCheck class="perk-list__icon" />
      {{ perk }}
    </li>
  </ul>
</template>

<style scoped>
.perk-list {
  display: grid;
  gap: 0.6875rem;
  font-size: 0.75rem;
  line-height: 1.3333;
}

.perk-list__item {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.perk-list__icon {
  flex-shrink: 0;
  color: var(--green-400);
}

@media (max-width: 47.9375em) {
  .perk-list {
    justify-items: center;
  }
}
</style>
