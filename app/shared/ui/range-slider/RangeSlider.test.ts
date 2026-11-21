import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import RangeSlider from './RangeSlider.vue';

const mountSlider = (props: Record<string, unknown> = {}) =>
  mount(RangeSlider, { props: { modelValue: 2, max: 4, ...props } });

describe('RangeSlider', () => {
  it('renders a native range input with the given bounds', () => {
    const input = mountSlider({ min: 1, step: 1 }).get('input');

    expect(input.attributes('type')).toBe('range');
    expect(input.attributes('min')).toBe('1');
    expect(input.attributes('max')).toBe('4');
    expect(input.attributes('step')).toBe('1');
    expect((input.element as HTMLInputElement).value).toBe('2');
  });

  it('exposes the fill ratio as a CSS variable', () => {
    const input = mountSlider().get('input');

    expect(input.attributes('style')).toContain('--fill: 0.5');
  });

  it('updates the fill when the model changes', async () => {
    const wrapper = mountSlider();
    await wrapper.setProps({ modelValue: 4 });

    expect(wrapper.get('input').attributes('style')).toContain('--fill: 1');
  });

  it('emits numeric model updates on input', async () => {
    const wrapper = mountSlider();
    await wrapper.get('input').setValue('3');

    expect(wrapper.emitted('update:modelValue')).toEqual([[3]]);
  });

  it('sets aria-valuetext when provided', () => {
    expect(mountSlider({ valueText: '100K pageviews' }).get('input').attributes('aria-valuetext')).toBe(
      '100K pageviews',
    );
  });

  it('omits aria-valuetext by default', () => {
    expect(mountSlider().get('input').attributes('aria-valuetext')).toBeUndefined();
  });

  it('passes through extra attributes such as aria-label', () => {
    const input = mount(RangeSlider, {
      props: { modelValue: 0, max: 4 },
      attrs: { 'aria-label': 'Monthly pageviews' },
    }).get('input');

    expect(input.attributes('aria-label')).toBe('Monthly pageviews');
  });
});
