<script src="./PrtPagination.js"></script>
<template>
  <div class="prt-pagination">
    <!-- PAGINATION -->

    <div class="flex justify-center">
      <div v-if="currentPage === 1" :class="disabledStyle">
        <span class="hidden sm:inline">&lt; &lt;</span>
      </div>

      <nuxt-link
        v-else
        :to="{ name: 'articles-page-page', params: { page: 1 } }"
        :class="buttonStyles"
      >
        <span class="hidden sm:inline"> &lt; &lt;</span>
      </nuxt-link>

      <div v-if="currentPage === 1" :class="disabledStyle">
        <span class="hidden sm:inline">&lt;</span>
      </div>

      <nuxt-link
        v-else
        :to="{ name: 'articles-page-page', params: { page: prevPage } }"
        :class="buttonStyles"
      >
        <span class="hidden sm:inline">&lt;</span>
      </nuxt-link>

      <div v-if="currentPage === totalPages" :class="disabledStyle">
        <span class="hidden sm:inline"> &gt;</span>
      </div>

      <nuxt-link
        v-else
        :to="{ name: 'articles-page-page', params: { page: nextPage } }"
        :class="buttonStyles"
      >
        <span class="hidden sm:inline"> &gt;</span>
      </nuxt-link>

      <div v-if="currentPage === totalPages" :class="disabledStyle">
        <span class="hidden sm:inline"> </span>
      </div>

      <nuxt-link
        v-else
        :to="{ name: 'articles-page-page', params: { page: totalPages } }"
        :class="buttonStyles"
      >
        <span class="hidden sm:inline"> &gt; &gt;</span>
      </nuxt-link>
    </div>
  </div>
</template>
<style lang="scss"></style>
