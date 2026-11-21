import { afterEach, describe, expect, it } from 'vitest';
import { enableAutoUnmount, mount } from '@vue/test-utils';
import { PricingPage } from '~/pages/pricing';

enableAutoUnmount(afterEach);

const setup = () => {
  const wrapper = mount(PricingPage, { attachTo: document.body });
  const slider = wrapper.get('input[type="range"]');
  const toggle = wrapper.get('input[role="switch"]');
  const views = () => wrapper.get('.pricing-card__views').text();
  const price = () => wrapper.get('.price-tag__amount').text();
  return { wrapper, slider, toggle, views, price };
};

describe('pricing flow', () => {
  it('starts at 100K pageviews for $16.00 per month', () => {
    const { views, price, slider } = setup();

    expect(views()).toBe('100K Pageviews');
    expect(price()).toBe('$16.00');
    expect(slider.attributes('aria-valuetext')).toBe('100K pageviews');
  });

  it.each([
    ['0', '10K Pageviews', '$8.00'],
    ['1', '50K Pageviews', '$12.00'],
    ['2', '100K Pageviews', '$16.00'],
    ['3', '500K Pageviews', '$24.00'],
    ['4', '1M Pageviews', '$36.00'],
  ])('slider at %s shows %s for %s monthly', async (value, expectedViews, expectedPrice) => {
    const { slider, views, price } = setup();
    await slider.setValue(value);

    expect(views()).toBe(expectedViews);
    expect(price()).toBe(expectedPrice);
  });

  it.each([
    ['0', '$6.00'],
    ['1', '$9.00'],
    ['2', '$12.00'],
    ['3', '$18.00'],
    ['4', '$27.00'],
  ])('yearly billing at %s applies 25%% off -> %s', async (value, expectedPrice) => {
    const { slider, toggle, price } = setup();
    await toggle.setValue(true);
    await slider.setValue(value);

    expect(price()).toBe(expectedPrice);
  });

  it('switching back to monthly restores the full price', async () => {
    const { toggle, price } = setup();
    await toggle.setValue(true);
    expect(price()).toBe('$12.00');

    await toggle.setValue(false);
    expect(price()).toBe('$16.00');
  });

  it('clicking the "Yearly Billing" label toggles the switch', async () => {
    const { wrapper, toggle, price } = setup();
    await wrapper.get('label').trigger('click');

    expect((toggle.element as HTMLInputElement).checked).toBe(true);
    expect(price()).toBe('$12.00');
  });

  it('keeps the slider fill in sync with the selected tier', async () => {
    const { slider } = setup();
    await slider.setValue('4');
    expect(slider.attributes('style')).toContain('--fill: 1');

    await slider.setValue('0');
    expect(slider.attributes('style')).toContain('--fill: 0');
  });
});
