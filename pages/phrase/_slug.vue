<template>
  <div class="container mx-auto flex flex-row flex-wrap">
    <div class="col w-3/4">
      <!-- <PrtItemsListing
        :articles="paginatedArticles"
        :total="allArticles.length"
      /> -->

      <PrtItemsListing :articles="articles" :total="articles.length" />
    </div>
    <div class="col w-1/4">
      <PrtSidebar :cats="cats" :tags="tags" />
    </div>

    <div class="col w-full"><PrtPagination /></div>
  </div>
</template>

<script>
// import getContent from '@/utils/getContent'
export default {
  async asyncData({
    $content,
    params,
    error,
    $taxonomyFormatter2,
    $taxonomyFormatter,
  }) {
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

      .where({ title: { $contains: params.slug } })
      .sortBy('createdAt', 'asc')
      .fetch()

    return {
      articles,

      // allArticles: content.allArticles,
      // paginatedArticles: content.paginatedArticles,
    }
  },
}
// export default {
//   async asyncData({ params, error, $content }) {
//     const articles = await $content('articles', params, { deep: true })
//       .where({ tags: { $contains: params.slug } })
//       .fetch()
//     return { articles }
//   },
// }
</script>
