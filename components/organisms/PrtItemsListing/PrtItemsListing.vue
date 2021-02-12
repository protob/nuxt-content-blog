<script src="./PrtItemsListing.js"></script>
<template>
  <section class="prt-items-listing">
    <div class="pr-16 pb-8">
      <masonry
        :cols="{ default: 3, 1000: 2, 700: 2, 400: 1 }"
        :gutter="{ default: '30px', 700: '15px' }"
      >
        <PrtItem
          v-for="(article, index) in articles"
          :key="index"
          :article="article"
        />
      </masonry>
    </div>

    <div
      v-if="total & !hidePagination"
      class="constainer mx-auto my-5 max-w-5xl pr-16"
    >
      <PrtPagination v-if="total > 5" :total="total" />
    </div>
  </section>
</template>
<style></style>
