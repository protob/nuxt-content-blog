import { shallowMount } from '@vue/test-utils'
import PrtSearch from './PrtSearch.vue'

describe('PrtSearch.vue', () => {
  it('renders a component', () => {
    const component = shallowMount(PrtSearch)
    expect(component.contains('.prt-search')).toBe(true)
  })
})
