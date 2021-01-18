import { shallowMount } from '@vue/test-utils'
import PrtSidebarWidget from './PrtSidebarWidget.vue'

describe('PrtSidebarWidget.vue', () => {
  it('renders a component', () => {
    const component = shallowMount(PrtSidebarWidget)
    expect(component.contains('.prt-sidebar-widget')).toBe(true)
  })
})
