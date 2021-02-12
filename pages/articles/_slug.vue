<template>
  <div>
    <section :class="getBg" class="post-banner mx-auto w-full h-96">
      <div
        class="container flex justify-end m-auto h-full flex-col justify-center items-end"
      >
        <section class="post-header container mx-auto px-0 mb-0">
          <span
            v-if="article.category"
            class="text-blue-500 font-medium uppercase tracking-wide text-sm"
          >
            <nuxt-link
              ::to="`/cat/${article.category.name}`"
              class="hover:underline"
              >{{ article.category }}</nuxt-link
            >
          </span>

          <h1 class="text-5xl font-medium leading-none mt-0 mb-0 banner-title">
            {{ article.title }}
          </h1>
        </section>

        <img
          alt=""
          :src="'/blog-images/' + article.image"
          class="blog-featured-image"
        />
      </div>
    </section>

    <div class="container mx-auto">
      <!-- Two columns -->
      <div class="flex mb-4">
        <div
          class="w-3/4 posts-wrap mr-12 segment-text bg-white px-12 pb-12 pt-4"
        >
          <div v-if="article" class="post-content text-break mb-4">
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
                  class="mb-2 tag text-dark inline-block text-grey-dark font-semibold py-1 px-2 mr-2 mb-2 text-sm"
                  :to="'/tag/' + tag"
                  >#{{ tag }}</nuxtLink
                >
              </li>
            </ul>
          </template>
        </div>
        <div class="w-1/4">
          <PrtSidebar />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'article',

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
  data: () => {
    return {
      bg: {
        white: 'bg-white',
        orange: 'bg-lcd-orange',
        yellow: 'bg-lcd-yellow',
        jqueryblue: 'bg-lcd-jquery-blue',
      },
    }
  },
  computed: {
    getBg() {
      const key = this.article.bg ? this.article.bg : 'white'

      return this.bg[key]
    },
  },
}
</script>
<style>
.bg-lcd-orange {
  background-color: #fa981d;
}
.bg-lcd-orange .banner-title {
  color: white;
}
.bg-lcd-yellow {
  background-color: #f8dc3d;
}
.bg-lcd-jquery-blue {
  background-color: #0769ad;
}
.bg-lcd-jquery-blue .banner-title {
  background: white;
  color: white;
}
.hero-banner {
  display: none;
}
.post-banner {
  position: relative;
}
.blog-featured-image {
  max-width: 400px;
  max-height: 200px;
  width: auto;
  position: absolute;
  right: 4rem;
  top: 50%;
  transform: translateY(-50%);
}
</style>
