import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import PriceTag from './PriceTag.vue';

describe('PriceTag', () => {
  it('renders the formatted amount and the period', () => {
    const wrapper = mount(PriceTag, { props: { amount: 16 } });

    expect(wrapper.get('.price-tag__amount').text()).toBe('$16.00');
    expect(wrapper.get('.price-tag__period').text()).toBe('/ month');
  });

  it('hides the slash from assistive tech', () => {
    const slash = mount(PriceTag, { props: { amount: 16 } }).get('.price-tag__period [aria-hidden="true"]');

    expect(slash.text()).toBe('/');
  });

  it('announces price changes politely', () => {
    expect(mount(PriceTag, { props: { amount: 8 } }).get('p').attributes('aria-live')).toBe('polite');
  });

  it('re-renders when the amount changes', async () => {
    const wrapper = mount(PriceTag, { props: { amount: 16 } });
    await wrapper.setProps({ amount: 12 });

    expect(wrapper.get('.price-tag__amount').text()).toBe('$12.00');
  });
});
