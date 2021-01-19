<template>
  <div class="grid gap-4 grid-cols-4">
    <div v-if="currentPage === 1" :class="disabledStyle">
      <span class="hidden sm:inline">First</span>
      &gt;
    </div>

    <nuxt-link
      v-else
      :to="{ name: 'articles-page-page', params: { page: 1 } }"
      :class="buttonStyles"
    >
      &gt; &gt;
      <span class="hidden sm:inline">First</span>
    </nuxt-link>

    <div v-if="currentPage === 1" :class="disabledStyle">
      <span class="hidden sm:inline">Prev</span>
      &gt;
    </div>

    <nuxt-link
      v-else
      :to="{ name: 'articles-page-page', params: { page: prevPage } }"
      :class="buttonStyles"
    >
      &gt;
      <span class="hidden sm:inline">Prev</span>
    </nuxt-link>

    <div v-if="currentPage === totalPages" :class="disabledStyle">
      <span class="hidden sm:inline">Next</span>
      &lt;
    </div>

    <nuxt-link
      v-else
      :to="{ name: 'articles-page-page', params: { page: nextPage } }"
      :class="buttonStyles"
    >
      <span class="hidden sm:inline">Next</span>
      &lt;
    </nuxt-link>

    <div v-if="currentPage === totalPages" :class="disabledStyle">
      <span class="hidden sm:inline">Last</span>
      &lt; &lt;
    </div>

    <nuxt-link
      v-else
      :to="{ name: 'articles-page-page', params: { page: totalPages } }"
      :class="buttonStyles"
    >
      <span class="hidden sm:inline">Last</span>
      &lt; &lt;
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'Pagination',

  props: {
    total: {
      type: Number,
      default: 0,
    },
    perPage: {
      type: Number,
      default: 5,
    },
  },
  computed: {
    buttonStyles() {
      return 'border rounded px-4 py-1 text-sm bg-white flex justify-center items-center sm:uppercase hover:bg-blue-500 hover:text-white transform duration-500 ease-in-out'
    },
    disabledStyle() {
      return 'border rounded px-4 py-1 text-sm bg-white flex justify-center items-center sm:uppercase text-gray-300'
    },
    totalPages() {
      return Math.ceil(this.total / this.perPage)
    },
    currentPage() {
      return parseInt(this.$route.params.page) > 0 ? this.$route.params.page : 1
    },
    prevPage() {
      return this.currentPage > 1 ? this.currentPage - 1 : 1
    },
    nextPage() {
      const page =
        this.currentPage < this.totalPages
          ? this.currentPage + 1
          : this.totalPages
      const currPage = page > 0 ? page : 1
      return currPage
    },
  },
}
</script>
