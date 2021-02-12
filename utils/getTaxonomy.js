export default async ($content) => {
  const allArticles = await $content('articles', {
    deep: true,
  })
    .only([
      'title',
      'slug',
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

  return {
    allArticles,
  }
}
