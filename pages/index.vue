<template>
  <div class="container mx-auto flex flex-row flex-wrap">
    <div class="col w-3/4">
      <PrtItemsListing />
    </div>
    <div class="col w-1/4">
      <PrtSidebar />
    </div>

    <div class="col w-full"><PrtPagination /></div>
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
