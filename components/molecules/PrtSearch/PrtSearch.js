export default {
  name: 'PrtSearch',

  data() {
    return {
      searchQuery: '',
      articles: [],
    }
  },
  watch: {
    async searchQuery(searchQuery) {
      if (!searchQuery) {
        this.articles = []
        return
      }
      this.articles = await this.$content('articles', { deep: true })
        .limit(6)
        .search(searchQuery)
        .fetch()
    },
  },
}
