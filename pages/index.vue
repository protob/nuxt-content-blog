<template>
  <div class="container mx-auto flex flex-row flex-wrap">
    <div class="col w-3/4">
      <PrtItemsListing
        :articles="paginatedArticles"
        :total="allArticles.length"
      />
    </div>
    <div class="col w-1/4">
      <PrtSidebar :cats="cats" :tags="tags" />
    </div>

    <div class="col w-full"><PrtPagination /></div>
  </div>
</template>
<script>
import getContent from '@/utils/getContent'
export default {
  async asyncData({
    $content,
    params,
    error,
    $taxonomyFormatter2,
    $taxonomyFormatter,
  }) {
    const content = await getContent($content, params, error)

    const articles = await $content('articles', params, { deep: true })
      .only([
        'slug',
        'title',
        'date',
        'excerpt',
        'coverImage',
        'image',
        'categories',
        'tags',
        'author',
      ])
      .sortBy('createdAt', 'asc')
      .fetch()
    // const itemsAndTags = await $content('articles', params.slug, { deep: true })
    //   .only(['tags'])
    //   .sortBy('createdAt', 'asc')
    //   .fetch()
    const tags = $taxonomyFormatter(articles)
    const cats = $taxonomyFormatter2(articles)

    return {
      tags,
      cats,
      articles,

      allArticles: content.allArticles,
      paginatedArticles: content.paginatedArticles,
    }
  },
  methods: {
    formatTaxonomies2(articles) {
      const catsDuplicatesArr = articles
        .map((item) => item.categories)
        // .map((item) => item.split(','))
        // .flat(1)
        // .map((item) => item.trim())
        .filter((item) => item)

      const cats = Object.values(
        catsDuplicatesArr.reduce((accum, currVal) => {
          accum[currVal] = accum[currVal] || [currVal, 0]
          accum[currVal][1]++
          return accum
        }, {})
      )
        .map((item) => {
          return {
            name: item[0],
            count: item[1],
          }
        })
        .sort((a, b) => a.name.localeCompare(b.name))
      return cats
    },
    formatTaxonomies(articles) {
      const tagsDuplicatesArr = articles
        .map((item) => item.tags)
        .map((item) => item.split(','))
        .flat(1)
        .map((item) => item.trim())
        .filter((item) => item)
      const tags = Object.values(
        tagsDuplicatesArr.reduce((accum, currVal) => {
          accum[currVal] = accum[currVal] || [currVal, 0]
          accum[currVal][1]++
          return accum
        }, {})
      )
        .map((item) => {
          return {
            name: item[0],
            count: item[1],
          }
        })
        .sort((a, b) => a.name.localeCompare(b.name))
      return tags
    },
  },
}
</script>
