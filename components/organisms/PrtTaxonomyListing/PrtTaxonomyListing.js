export default {
  name: 'PrtTagsListing',
  props: {
    taxonomyType: {
      type: String,
      default: 'tag',
    },

    items: {
      type: Array,
      default: [],
    },
  },
}
