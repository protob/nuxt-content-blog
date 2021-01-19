<script src="./PrtTaxonomyItem.js"></script>
<template>
  <div>
    <div class="prt-tag text-red" v-if="taxonomyType === 'tag'">
      <NuxtLink
        :to="`/tag/${item.name}`"
        class="flex transition-shadow duration-150 ease-in-out shadow-sm hover:shadow-md xxlmax:flex-col"
      >
        {{ item.name }}
      </NuxtLink>
      ({{ item.count }})
    </div>
    <div class="prt-tag text-red" v-else>
      <NuxtLink
        :to="`/cat/${item.name}`"
        class="flex transition-shadow duration-150 ease-in-out shadow-sm hover:shadow-md xxlmax:flex-col"
      >
        {{ item.name }}
      </NuxtLink>
      ({{ item.count }})
    </div>
  </div>
</template>
<style lang="scss"></style>
