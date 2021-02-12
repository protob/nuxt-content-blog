<template>
  <div>
    <h1>Blog Posts</h1>
    <PrtTag />
    <PrtCat />
  </div>
</template>
<script>
export default {
  async asyncData({ $content, params }) {
    const articles = await $content('blog', params.slug)
      .only(['title', 'description', 'img', 'slug', 'author'])
      .sortBy('createdAt', 'desc')
      .fetch()
    const tags = await $content('tags', params.slug)
      .only(['name', 'description', 'img', 'slug'])
      .sortBy('createdAt', 'asc')
      .fetch()

    return {
      articles,
      tags,
    }
  },
}
</script>
