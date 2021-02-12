export default {
  name: 'PrtItem',
  props: {
    article: {
      type: Object,
    },
  },
  computed: {
    categories() {
      return this.article.categories.split(',').map((item) => item.trim())
    },
    tags() {
      return this.article.tags.split(',').map((item) => item.trim())
    },
  },
  methods: {},
}
