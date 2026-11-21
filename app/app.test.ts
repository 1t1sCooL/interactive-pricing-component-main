import { afterEach, describe, expect, it, vi } from 'vitest';
import { mount } from '@vue/test-utils';

const useHead = vi.fn();
vi.stubGlobal('useHead', useHead);

const { default: App } = await import('./app.vue');

interface HeadLink {
  rel: string;
  href: string;
  as?: string;
  type?: string;
  crossorigin?: string;
}

const mountApp = () => mount(App, { global: { stubs: { NuxtPage: { template: '<div class="nuxt-page" />' } } } });

const links = (): HeadLink[] => useHead.mock.calls[0]?.[0].link ?? [];

describe('App', () => {
  afterEach(() => useHead.mockClear());

  it('renders the router outlet', () => {
    expect(mountApp().find('.nuxt-page').exists()).toBe(true);
  });

  it('does not preload the font, which is inlined into the CSS', () => {
    mountApp();

    expect(links().some((l) => l.rel === 'preload')).toBe(false);
  });

  it('registers the bundled favicon', () => {
    mountApp();
    const icon = links().find((l) => l.rel === 'icon');

    expect(icon?.type).toBe('image/png');
    expect(icon?.href).toMatch(/favicon-32x32.*\.png/);
  });
});
