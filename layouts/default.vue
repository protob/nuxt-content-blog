<template>
  <div>
    <PrtHeader />
    <div class="container mx-auto flex flex-row flex-wrap">
      <div class="col w-3/4">
        <Nuxt />
      </div>
      <div class="col w-1/4">
        <PrtSidebar />
      </div>
    </div>

    <PrtFooter />
  </div>
</template>

<script>
export default {
  mounted() {},

  methods: {},
}
</script>

<style></style>
