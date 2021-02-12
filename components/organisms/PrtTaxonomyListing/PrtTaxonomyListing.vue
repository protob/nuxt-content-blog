<script src="./PrtTaxonomyListing.js"></script>
<template>
  <div class="prt-taxonomy-listing flex align-start flex-wrap">
    <PrtTaxonomyItem
      v-for="(item, index) in items"
      :key="index"
      :item="item"
      :taxonomy-type="taxonomyType"
    />
  </div>
</template>
<style lang="scss"></style>
