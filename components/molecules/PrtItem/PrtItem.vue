<script src="./PrtItem.js"></script>
<template>
  <div class="prt-item mb-4">
    <div class="max-w-xs rounded overflow-hidden shadow-lg my-2">
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
          class="flex transition-shadow duration-150 ease-in-out shadow-sm hover:shadow-md xxlmax:flex-col"
        >
          <div class="font-bold text-xl mb-2">
            {{ article.title }}
          </div></NuxtLink
        >

        <p>date: {{ article.date }}</p>
        <p>cat: {{ article.categories }}</p>
        <p>tags: {{ article.tags }}</p>
      </div>
      <div class="px-6 py-4">
        <span
          class="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2"
          >#photography</span
        >
        <span
          class="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2"
          >#travel</span
        >
        <span
          class="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker"
          >#winter</span
        >
      </div>
    </div>
  </div>
</template>
<style lang="scss"></style>
