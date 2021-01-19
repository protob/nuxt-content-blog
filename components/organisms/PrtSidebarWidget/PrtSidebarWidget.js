export default {
  name: 'PrtSidebarWidget',
  props: {
    taxonomyType: {
      type: String,
      default: '',
    },
    items: {
      type: Array,
      default: [],
    },
    label: {
      type: String,
      default: '',
    },
  },
}
