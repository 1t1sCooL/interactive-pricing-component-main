import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import PricingCard from './PricingCard.vue';
import { PerkList, PriceTag } from '../../../entities/plan';
import { PageviewsSlider } from '../../../features/select-pageviews';
import { BillingToggle } from '../../../features/toggle-billing';

describe('PricingCard', () => {
  it('is a labelled region', () => {
    expect(mount(PricingCard).get('section').attributes('aria-label')).toBe('Pricing');
  });

  it('composes the slider, price, billing toggle and perks', () => {
    const wrapper = mount(PricingCard);

    expect(wrapper.findComponent(PageviewsSlider).exists()).toBe(true);
    expect(wrapper.findComponent(PriceTag).exists()).toBe(true);
    expect(wrapper.findComponent(BillingToggle).exists()).toBe(true);
    expect(wrapper.findComponent(PerkList).props('perks')).toHaveLength(3);
  });

  it('renders the default state', () => {
    const wrapper = mount(PricingCard);

    expect(wrapper.get('.pricing-card__views').text()).toBe('100K Pageviews');
    expect(wrapper.findComponent(PriceTag).props('amount')).toBe(16);
    expect(wrapper.findComponent(BillingToggle).props('modelValue')).toBe('monthly');
  });

  it('renders the call to action as a non-submitting button', () => {
    const cta = mount(PricingCard).get('.pricing-card__cta');

    expect(cta.element.tagName).toBe('BUTTON');
    expect(cta.attributes('type')).toBe('button');
    expect(cta.text()).toBe('Start my trial');
  });
});
