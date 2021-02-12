<script src="./PrtSidebar.js"></script>
<template>
  <aside class="prt-sidebar py-4">
    <div class="container mx-auto">
      <div class="text-center text-white bg-indigo-900 mb-4">
        <h1 class="text-white text-2xl p-8">NOTES BLOG</h1>
      </div>
      <PrtSidebarWidget :label="'tags'" :items="cats" :taxonomy-type="'tag'" />

      <PrtSidebarWidget :label="'cats'" :items="tags" :taxonomy-type="'cat'" />
    </div>
  </aside>
</template>
<style lang="scss"></style>
