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
      .sortBy('createdAt', 'asc')
      .fetch()

    return {
      articles,
    }
  },
}
</script>
