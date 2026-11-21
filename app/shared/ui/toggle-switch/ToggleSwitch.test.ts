import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import ToggleSwitch from './ToggleSwitch.vue';

describe('ToggleSwitch', () => {
  it('renders a checkbox with the switch role', () => {
    const input = mount(ToggleSwitch, { props: { modelValue: false } }).get('input');

    expect(input.attributes('type')).toBe('checkbox');
    expect(input.attributes('role')).toBe('switch');
  });

  it('reflects the model in the checked state', async () => {
    const wrapper = mount(ToggleSwitch, { props: { modelValue: false } });
    expect((wrapper.get('input').element as HTMLInputElement).checked).toBe(false);

    await wrapper.setProps({ modelValue: true });
    expect((wrapper.get('input').element as HTMLInputElement).checked).toBe(true);
  });

  it('emits the new state on change', async () => {
    const wrapper = mount(ToggleSwitch, { props: { modelValue: false } });
    await wrapper.get('input').setValue(true);

    expect(wrapper.emitted('update:modelValue')).toEqual([[true]]);
  });

  it('forwards id and aria attributes to the input', () => {
    const input = mount(ToggleSwitch, {
      props: { modelValue: false },
      attrs: { id: 'billing', 'aria-describedby': 'badge' },
    }).get('input');

    expect(input.attributes('id')).toBe('billing');
    expect(input.attributes('aria-describedby')).toBe('badge');
  });
});
