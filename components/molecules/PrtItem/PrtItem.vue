<script src="./PrtItem.js"></script>
<template>
  <div class="prt-item mb-4">
    <div class="max-w-xs rounded overflow-hidden shadow-lg my-2">
      <img
        class="w-full"
        src="https://tailwindcss.com/img/card-top.jpg"
        alt="Sunset in the mountains"
      />
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
        <p class="text-grey-darker text-base">
          {{ lorem() }}
        </p>
      </div>
      <div class="px-6 py-4">
        <span
          class="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2"
          >#photography</span
        >
        <span
          class="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2"
          >#travel</span
        >
        <span
          class="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker"
          >#winter</span
        >
      </div>
    </div>
  </div>
</template>
<style lang="scss"></style>
