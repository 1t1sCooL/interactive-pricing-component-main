<script setup lang="ts">
import { computed } from 'vue';
import { progressPercent } from '../../lib/percent';

const props = withDefaults(
  defineProps<{
    min?: number;
    max: number;
    step?: number;
    valueText?: string;
  }>(),
  { min: 0, step: 1, valueText: undefined },
);

const model = defineModel<number>({ required: true });

const fillRatio = computed(() => progressPercent(model.value, props.min, props.max) / 100);

const onInput = (event: Event) => {
  model.value = Number((event.target as HTMLInputElement).value);
};
</script>

<template>
  <input
    class="range-slider"
    type="range"
    :min="min"
    :max="max"
    :step="step"
    :value="model"
    :aria-valuetext="valueText"
    :style="{ '--fill': fillRatio }"
    @input="onInput"
  />
</template>

<style scoped>
.range-slider {
  --thumb: 2.5rem;
  --track: 0.5rem;
  --fill-stop: calc(var(--thumb) / 2 + (100% - var(--thumb)) * var(--fill));

  display: block;
  width: 100%;
  height: var(--thumb);
  margin: 0;
  background: none;
  cursor: pointer;
  appearance: none;
}

.range-slider::-webkit-slider-runnable-track {
  height: var(--track);
  border-radius: calc(var(--track) / 2);
  background: linear-gradient(
    to right,
    var(--green-100) var(--fill-stop),
    var(--slate-200) var(--fill-stop)
  );
}

.range-slider::-moz-range-track {
  height: var(--track);
  border-radius: calc(var(--track) / 2);
  background-color: var(--slate-200);
}

.range-slider::-moz-range-progress {
  height: var(--track);
  border-radius: calc(var(--track) / 2);
  background-color: var(--green-100);
}

.range-slider::-webkit-slider-thumb {
  width: var(--thumb);
  height: var(--thumb);
  margin-top: calc((var(--track) - var(--thumb)) / 2);
  border: 0;
  border-radius: 50%;
  background: var(--green-400) url('../../assets/images/icon-slider.svg') no-repeat center;
  box-shadow: var(--shadow-thumb);
  appearance: none;
}

.range-slider::-moz-range-thumb {
  width: var(--thumb);
  height: var(--thumb);
  border: 0;
  border-radius: 50%;
  background: var(--green-400) url('../../assets/images/icon-slider.svg') no-repeat center;
  box-shadow: var(--shadow-thumb);
}

.range-slider:hover::-webkit-slider-thumb {
  background-color: var(--green-hover);
}

.range-slider:hover::-moz-range-thumb {
  background-color: var(--green-hover);
}

.range-slider:active::-webkit-slider-thumb {
  background-color: var(--green-active);
  cursor: grabbing;
}

.range-slider:active::-moz-range-thumb {
  background-color: var(--green-active);
  cursor: grabbing;
}

.range-slider:focus-visible {
  outline: none;
}

.range-slider:focus-visible::-webkit-slider-thumb {
  outline: 2px solid var(--slate-800);
  outline-offset: 3px;
}

.range-slider:focus-visible::-moz-range-thumb {
  outline: 2px solid var(--slate-800);
  outline-offset: 3px;
}

@media (prefers-reduced-motion: no-preference) {
  .range-slider::-webkit-slider-thumb {
    transition: background-color 0.2s ease;
  }

  .range-slider::-moz-range-thumb {
    transition: background-color 0.2s ease;
  }
}
</style>
