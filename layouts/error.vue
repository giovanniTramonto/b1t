<template>
  <main class="l-wrapper">
    <section class="l-block">
      <h1 v-if="error.statusCode === 404">Page not found …</h1>
      <h1 v-else>An error occurred …</h1>
    </section>
    <section class="l-block">
      <nuxt-link to="/">Home page</nuxt-link>
    </section>
  </main>
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
