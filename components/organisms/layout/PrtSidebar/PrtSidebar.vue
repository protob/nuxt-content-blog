<script src="./PrtSidebar.js"></script>
<template>
  <aside class="prt-sidebar py-4">
    <div class="container mx-auto">
      <div class="h-32 text-center text-white bg-indigo-900">
        <h1 class="text-white text-xl">NOTES BLOG</h1>
      </div>
      <PrtSidebarWidget :label="'tags'" :items="cats" />

      <PrtSidebarWidget :label="'cats'" :items="tags" :taxonomyType="'cat'" />
    </div>
  </aside>
</template>
<style lang="scss"></style>
