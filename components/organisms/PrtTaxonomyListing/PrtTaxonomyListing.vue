<script src="./PrtTaxonomyListing.js"></script>
<template>
  <div class="prt-taxonomy-listing">
    <PrtTaxonomyItem
      v-for="(item, index) in items"
      :key="index"
      :item="item"
      :taxonomyType="taxonomyType"
    />
  </div>
</template>
<style lang="scss"></style>
