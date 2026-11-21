<script setup lang="ts">
const model = defineModel<boolean>({ required: true });

const onChange = (event: Event) => {
  model.value = (event.target as HTMLInputElement).checked;
};
</script>

<template>
  <input class="toggle-switch" type="checkbox" role="switch" :checked="model" @change="onChange" />
</template>

<style scoped>
.toggle-switch {
  --knob: 0.875rem;
  --inset: 0.25rem;

  position: relative;
  flex-shrink: 0;
  width: 2.75rem;
  height: 1.375rem;
  margin: 0;
  border-radius: 0.6875rem;
  background-color: var(--slate-300);
  cursor: pointer;
  appearance: none;
}

.toggle-switch::before {
  content: '';
  position: absolute;
  top: 50%;
  left: var(--inset);
  width: var(--knob);
  height: var(--knob);
  border-radius: 50%;
  background-color: var(--white);
  translate: 0 -50%;
}

.toggle-switch:hover {
  background-color: var(--green-hover);
}

.toggle-switch:checked {
  background-color: var(--green-400);
}

.toggle-switch:checked::before {
  left: calc(100% - var(--inset) - var(--knob));
}

@media (prefers-reduced-motion: no-preference) {
  .toggle-switch {
    transition: background-color 0.2s ease;
  }

  .toggle-switch::before {
    transition: left 0.2s ease;
  }
}
</style>
