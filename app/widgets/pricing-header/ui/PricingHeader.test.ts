import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import PricingHeader from './PricingHeader.vue';

describe('PricingHeader', () => {
  it('renders a banner landmark with the page heading', () => {
    const wrapper = mount(PricingHeader);

    expect(wrapper.find('header').exists()).toBe(true);
    expect(wrapper.get('h1').text()).toBe('Simple, traffic-based pricing');
  });

  it('renders the subtitle with a mobile-only line break', () => {
    const subtitle = mount(PricingHeader).get('.pricing-header__subtitle');

    expect(subtitle.text()).toBe('Sign-up for our 30-day trial. No credit card required.');
    expect(subtitle.find('br.pricing-header__break').exists()).toBe(true);
  });
});
