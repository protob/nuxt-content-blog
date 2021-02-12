import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'PrtSidebar',

  created() {
    if (!this.taxonomiesFetched) {
      this.setupTaxonomies().then(() => {
        this.setTaxonomies()
      })
    }
  },
  data() {
    return {
      cats: [],
      tags: [],
      taxonomiesFetched: false,
    }
  },
  methods: {
    async setTaxonomies() {
      this.tags = await this.getTags()
      this.cats = await this.getCats()
      this.taxonomiesFetched = true
    },
    ...mapActions({ setupTaxonomies: 'setTaxonomies' }),
    ...mapGetters({
      getTags: 'getTags',
      getCats: 'getCats',
    }),
  },
}
