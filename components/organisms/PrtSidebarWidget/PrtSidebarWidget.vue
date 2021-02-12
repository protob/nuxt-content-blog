<script src="./PrtSidebarWidget.js"></script>
<template>
  <div class="prt-sidebar-widget text-center pb-4">
    <header class="bg-indigo-900 p-2 text-white uppercase mb-2 text-xl">
      {{ label }}
    </header>

    <PrtTaxonomyListing :items="items" :taxonomy-type="taxonomyType" />
  </div>
</template>
<style lang="scss"></style>
