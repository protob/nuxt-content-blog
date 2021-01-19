<script src="./PrtSidebarWidget.js"></script>
<template>
  <div class="prt-sidebar-widget text-center">
    <header class="bg-indigo-900 p-2 text-white">{{ label }}</header>

    <PrtTaxonomyListing :items="items" :taxonomyType="taxonomyType" />
  </div>
</template>
<style lang="scss"></style>
