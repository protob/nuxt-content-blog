export default {
  name: 'PrtTag',
  props: {
    taxonomyType: {
      type: String,
      default: 'tag',
    },
    item: {
      type: Object,
    },
  },
}
