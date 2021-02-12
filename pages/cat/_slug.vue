<template>
  <PrtItemsListing
    :articles="articles"
    :total="articles.length"
    :hide-pagination="true"
  />
</template>

<script>
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

      .where({ categories: { $contains: params.slug } })
      .sortBy('createdAt', 'asc')
      .fetch()

    return {
      articles,
    }
  },
}
</script>
