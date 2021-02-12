<script src="./PrtItem.js"></script>
<template>
  <div class="prt-item mb-4">
    <div class="max-w-xs rounded overflow-hidden shadow-lg mb-2 mt-4">
      <NuxtLink
        :to="`/articles/${article.slug}`"
        class="flex transition-shadow duration-150 ease-in-out shadow-sm hover:shadow-md xxlmax:flex-col"
      >
        <img
          v-if="article.image"
          class="w-full"
          :src="'/blog-images/' + article.image"
        />
      </NuxtLink>
      <div class="px-6 py-4">
        <!-- :to="{ name: 'blog-slug', params: { slug: article.slug } }" -->
        <NuxtLink
          :to="`/articles/${article.slug}`"
          class="flex xxlmax:flex-col border-0"
        >
          <div class="font-bold text-xl mb-2">
            {{ article.title }}
          </div></NuxtLink
        >

        <p>date: {{ article.date }}</p>
      </div>

      <div v-if="article.categories" class="px-6">
        <nuxt-link
          v-for="cat in categories"
          :key="cat"
          :to="'/cat/' + cat"
          class="inline-block font-bold mr-2 border py-1 px-2 rounded bg-gray-100"
          >{{ cat }}
        </nuxt-link>
      </div>

      <div v-if="article.tags" class="px-6 py-4">
        <nuxt-link
          v-for="tag in tags"
          :key="tag"
          :to="'/tag/' + tag"
          class="inline-block font-bold mr-2"
          >#{{ tag }}
        </nuxt-link>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
