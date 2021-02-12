<template>
  <PrtItemsListing :articles="paginatedArticles" :total="allArticles.length" />
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
}
</script>
