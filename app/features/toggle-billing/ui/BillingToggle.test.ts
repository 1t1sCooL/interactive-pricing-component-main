import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import BillingToggle from './BillingToggle.vue';

const mountToggle = (billing: 'monthly' | 'yearly' = 'monthly') =>
  mount(BillingToggle, { props: { modelValue: billing } });

describe('BillingToggle', () => {
  it('shows both billing labels', () => {
    const wrapper = mountToggle();

    expect(wrapper.get('.billing-toggle__monthly').text()).toBe('Monthly Billing');
    expect(wrapper.get('label').text()).toBe('Yearly Billing');
  });

  it('labels the switch with "Yearly Billing"', () => {
    const wrapper = mountToggle();
    const input = wrapper.get('input[role="switch"]');

    expect(input.attributes('id')).toBeTruthy();
    expect(wrapper.get('label').attributes('for')).toBe(input.attributes('id'));
  });

  it('describes the switch with the discount badge', () => {
    const wrapper = mountToggle();
    const describedBy = wrapper.get('input').attributes('aria-describedby');

    expect(wrapper.get(`[id="${describedBy}"]`).classes()).toContain('billing-toggle__badge');
  });

  it('renders the long badge for readers and the short one decoratively', () => {
    const wrapper = mountToggle();

    expect(wrapper.get('.billing-toggle__badge-long').text()).toBe('25% discount');
    const short = wrapper.get('.billing-toggle__badge-short');
    expect(short.text()).toBe('-25%');
    expect(short.attributes('aria-hidden')).toBe('true');
  });

  it('is unchecked for monthly and checked for yearly', () => {
    expect((mountToggle('monthly').get('input').element as HTMLInputElement).checked).toBe(false);
    expect((mountToggle('yearly').get('input').element as HTMLInputElement).checked).toBe(true);
  });

  it('emits yearly when switched on and monthly when switched off', async () => {
    const wrapper = mountToggle();
    await wrapper.get('input').setValue(true);
    await wrapper.setProps({ modelValue: 'yearly' });
    await wrapper.get('input').setValue(false);

    expect(wrapper.emitted('update:modelValue')).toEqual([['yearly'], ['monthly']]);
  });
});
