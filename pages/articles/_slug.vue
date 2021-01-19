<template>
  <div>
    <!-- This is an example component -->

    <div
      v-if="article"
      class="banner bg-blue-800 bg-banner-outer shadow-2xl h-64 bg-no-repeat bg-right"
      :style="{ backgroundImage: `url('/blog-images/${article.image}')` }"
    >
      <div class="container mx-auto h-full flex flex-col justify-center">
        <div class="caption">
          <h1
            class="caption-text bg-navy text-white text-3xl font-semibold float-left py-2 px-8 shadow-2xl"
          >
            {{ article.title }}
          </h1>
        </div>
      </div>
    </div>

    <div class="container mx-auto">
      <!-- Two columns -->
      <div class="flex mb-4">
        <div class="w-3/4 posts-wrap mr-12 segment-text bg-white px-12 py-12">
          <div v-if="article" class="post-content text-break">
            <nuxt-content :document="article" />
          </div>
          <template v-if="article.tags.length">
            <h4>Tags:</h4>
            <ul class="tags-list">
              <li
                v-for="tag in article.tags.split(',')"
                :key="tag.id"
                class="inline-block"
              >
                <nuxtLink
                  class="mb-2 tag text-dark inline-block text-grey-dark font-semibold py-1 px-2 border border-grey rounded mr-2 mb-2 text-sm"
                  :to="'/tag/' + tag"
                  >{{ tag }}</nuxtLink
                >
              </li>
            </ul>
          </template>
        </div>
        <div class="w-1/4">
          <PrtSidebar :cats="cats" :tags="tags" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({
    $content,
    params,
    $taxonomyFormatter2,
    $taxonomyFormatter,
  }) {
    const articles1 = await $content('articles', params, { deep: true })
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
    const tags = $taxonomyFormatter(articles1)
    const cats = $taxonomyFormatter2(articles1)
    const articles = await $content('articles', params, { deep: true })
      .where({ slug: params.slug })
      .fetch()

    const article = articles[0]
    return { article, tags, cats }
  },
}
</script>
