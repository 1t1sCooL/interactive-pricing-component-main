import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import PageviewsSlider from './PageviewsSlider.vue';
import { PRICING_TIERS } from '../../../entities/plan';

describe('PageviewsSlider', () => {
  it('spans every pricing tier', () => {
    const input = mount(PageviewsSlider, { props: { modelValue: 2 } }).get('input');

    expect(input.attributes('min')).toBe('0');
    expect(input.attributes('max')).toBe(String(PRICING_TIERS.length - 1));
  });

  it('has an accessible name and a human readable value', () => {
    const input = mount(PageviewsSlider, { props: { modelValue: 2 } }).get('input');

    expect(input.attributes('aria-label')).toBe('Monthly pageviews');
    expect(input.attributes('aria-valuetext')).toBe('100K pageviews');
  });

  it('updates the value text with the model', async () => {
    const wrapper = mount(PageviewsSlider, { props: { modelValue: 2 } });
    await wrapper.setProps({ modelValue: 4 });

    expect(wrapper.get('input').attributes('aria-valuetext')).toBe('1M pageviews');
  });

  it('emits the selected tier index', async () => {
    const wrapper = mount(PageviewsSlider, { props: { modelValue: 2 } });
    await wrapper.get('input').setValue('0');

    expect(wrapper.emitted('update:modelValue')).toEqual([[0]]);
  });
});
