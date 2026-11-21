import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import IconCheck from './IconCheck.vue';

describe('IconCheck', () => {
  it('renders a decorative 9x8 svg', () => {
    const svg = mount(IconCheck).get('svg');

    expect(svg.attributes('aria-hidden')).toBe('true');
    expect(svg.attributes('focusable')).toBe('false');
    expect(svg.attributes('viewBox')).toBe('0 0 9 8');
  });

  it('strokes with currentColor so the parent controls the colour', () => {
    expect(mount(IconCheck).get('path').attributes('stroke')).toBe('currentColor');
  });
});
