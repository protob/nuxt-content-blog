export default {
  name: 'PrtItemsListing',
  props: {
    hidePagination: {
      type: Boolean,
      default: false,
    },
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
