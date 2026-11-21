import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import IndexRoute from './index.vue';
import { PricingPage } from '~/pages/pricing';

describe('index route', () => {
  it('renders the pricing page', () => {
    expect(mount(IndexRoute).findComponent(PricingPage).exists()).toBe(true);
  });
});
