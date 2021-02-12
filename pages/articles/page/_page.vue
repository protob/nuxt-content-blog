<template>
  <div>
    <div class="container mx-auto">
      <h2
        class="text-center text-sm mb-4 uppercase bg-indigo-900 text-white inline-block mx-auto px-4 py-4 my-4"
      >
        All Articles ({{ allArticles.length }})
      </h2>
    </div>

    <PrtItemsListing
      :articles="paginatedArticles"
      :total="allArticles.length"
    />
  </div>
</template>

<script>
import getContent from '@/utils/getContent'
import { mapGetters } from 'vuex'
export default {
  name: 'ArticleListPage',
  components: {},
  async asyncData({ $content, app, params, error }) {
    const content = await getContent($content, params, error)
    return {
      allArticles: content.allArticles,
      paginatedArticles: content.paginatedArticles,
    }
  },
  data() {
    return {
      tags: [],
      cats: [],
    }
  },
  mounted() {
    this.tags = this.getTags()
    this.cats = this.getCats()
  },
  methods: {
    ...mapGetters({
      getTags: 'getTags',
      getCats: 'getCats',
    }),
  },

  head() {
    return {
      title: `Articles Page ${this.$route.params.page} - Learning Laravel and VueJS`,
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: `${this.$config.baseUrl}/articles/page/${this.$route.params.page}`,
        },
      ],
    }
  },
}
</script>
