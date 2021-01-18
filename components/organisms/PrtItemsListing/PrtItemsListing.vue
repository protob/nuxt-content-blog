<script src="./PrtItemsListing.js"></script>
<template>
  <div class="prt-items-listing px-16 py-8">
    <masonry
      class="pt-8"
      :cols="{ default: 3, 1000: 2, 700: 2, 400: 1 }"
      :gutter="{ default: '30px', 700: '15px' }"
    >
      <PrtItem v-for="index in 10" :key="index" />
    </masonry>
  </div>
</template>
<style></style>
