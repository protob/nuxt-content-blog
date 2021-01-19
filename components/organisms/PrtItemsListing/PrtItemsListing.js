export default {
  name: 'PrtItemsListing',
  props: {
    taxonomyType: {
      type: String,
      default: 'tag',
    },
    total: {
      type: Number,
      default: 0,
    },

    articles: {
      type: Array,
      default: [],
    },
  },
}
