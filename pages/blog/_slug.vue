<template>
  <div>
    <div v-if="article" class="a">
      {{ article }}
    </div>
  </div>
</template>
<script>
export default {
  async asyncData({ $content, params }) {
    const article = await $content('articles', params, { deep: true })
      .where({ slug: params.slug })
      .fetch()
    return { article }
  },
}
</script>
