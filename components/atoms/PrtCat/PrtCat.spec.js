import { shallowMount } from '@vue/test-utils'
import PrtCat from './PrtCat.vue'

describe('PrtCat.vue', () => {
  it('renders a component', () => {
    const component = shallowMount(PrtCat)
    expect(component.contains('.prt-cat')).toBe(true)
  })
})
