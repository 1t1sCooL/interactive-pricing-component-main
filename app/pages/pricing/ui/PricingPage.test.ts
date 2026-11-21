import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import PricingPage from './PricingPage.vue';
import { PricingCard } from '../../../widgets/pricing-card';
import { PricingHeader } from '../../../widgets/pricing-header';
import { SiteFooter } from '../../../widgets/site-footer';

const follows = (a: Element, b: Element) => Boolean(a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING);

describe('PricingPage', () => {
  it('puts the header and the card inside the main landmark', () => {
    const main = mount(PricingPage).get('main');

    expect(main.findComponent(PricingHeader).exists()).toBe(true);
    expect(main.findComponent(PricingCard).exists()).toBe(true);
  });

  it('renders the header before the card', () => {
    const wrapper = mount(PricingPage);

    expect(follows(wrapper.findComponent(PricingHeader).element, wrapper.findComponent(PricingCard).element)).toBe(true);
  });

  it('renders the attribution footer after main, outside of it', () => {
    const wrapper = mount(PricingPage);
    const footer = wrapper.findComponent(SiteFooter);

    expect(footer.exists()).toBe(true);
    expect(wrapper.get('main').element.contains(footer.element)).toBe(false);
    expect(follows(wrapper.get('main').element, footer.element)).toBe(true);
  });
});
