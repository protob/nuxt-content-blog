<script src="./PrtTaxonomyItem.js"></script>
<template>
  <div class="inline-block">
    <div v-if="taxonomyType === 'tag'" class="prt-tag text-md">
      <NuxtLink :to="`/tag/${item.name}`" class="font-bold pr-2">
        #{{ item.name }}
      </NuxtLink>
      <!-- ({{ item.count }}) -->
    </div>
    <div
      v-else
      class="prt-tag flex inline-block mr-2 border py-1 px-2 mb-1 text-md rounded bg-gray-100"
    >
      <NuxtLink :to="`/cat/${item.name}`" class="flex font-bold">
        {{ item.name }}
      </NuxtLink>
      <span class="pl-1"> ({{ item.count }}) </span>
    </div>
  </div>
</template>
<style lang="scss"></style>
