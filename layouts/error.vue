<template>
  <section class="l-block">
    <h1 class="as-h1 as-h1--top">
      <span v-if="error.statusCode === 404">page not found …</span>
      <span v-else>an error occurred …</span>
    </h1>
  </section>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>
