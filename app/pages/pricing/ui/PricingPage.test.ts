import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import PricingPage from './PricingPage.vue';
import { PricingCard } from '../../../widgets/pricing-card';
import { PricingHeader } from '../../../widgets/pricing-header';

describe('PricingPage', () => {
  it('wraps the content in a main landmark', () => {
    expect(mount(PricingPage).get('main').classes()).toContain('pricing-page');
  });

  it('renders the header before the card', () => {
    const wrapper = mount(PricingPage);
    const header = wrapper.findComponent(PricingHeader);
    const card = wrapper.findComponent(PricingCard);

    expect(header.exists()).toBe(true);
    expect(card.exists()).toBe(true);
    expect(header.element.compareDocumentPosition(card.element) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
  });
});
