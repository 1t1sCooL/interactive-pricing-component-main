import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import SiteFooter from './SiteFooter.vue';

describe('SiteFooter', () => {
  it('credits the challenge and the author', () => {
    const footer = mount(SiteFooter).get('footer');

    expect(footer.text().replace(/\s+/g, ' ')).toBe('Challenge by Frontend Mentor. Coded by 1t1sCooL.');
  });

  it('links to Frontend Mentor and the author site', () => {
    const links = mount(SiteFooter).findAll('a');

    expect(links.map((a) => [a.text(), a.attributes('href')])).toEqual([
      ['Frontend Mentor', 'https://www.frontendmentor.io?ref=challenge'],
      ['1t1sCooL', 'https://mmalabugin.ru/'],
    ]);
  });

  it('opens links in a new tab without leaking the opener', () => {
    for (const link of mount(SiteFooter).findAll('a')) {
      expect(link.attributes('target')).toBe('_blank');
      expect(link.attributes('rel')).toBe('noopener noreferrer');
    }
  });
});
