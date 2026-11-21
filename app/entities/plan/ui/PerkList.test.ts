import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import PerkList from './PerkList.vue';
import IconCheck from '../../../shared/ui/icons/IconCheck.vue';

describe('PerkList', () => {
  const perks = ['Unlimited websites', '100% data ownership', 'Email reports'];

  it('renders one list item per perk', () => {
    const items = mount(PerkList, { props: { perks } }).findAll('li');

    expect(items.map((li) => li.text())).toEqual(perks);
  });

  it('keeps list semantics despite list-style: none', () => {
    expect(mount(PerkList, { props: { perks } }).get('ul').attributes('role')).toBe('list');
  });

  it('prefixes every perk with a check icon', () => {
    expect(mount(PerkList, { props: { perks } }).findAllComponents(IconCheck)).toHaveLength(3);
  });

  it('renders an empty list without items', () => {
    expect(mount(PerkList, { props: { perks: [] } }).findAll('li')).toHaveLength(0);
  });
});
