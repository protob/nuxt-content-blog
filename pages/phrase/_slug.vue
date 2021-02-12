<template>
  <PrtItemsListing
    :articles="articles"
    :total="articles.length"
    :hide-pagination="true"
  />
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
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
    }
  },
}
</script>
