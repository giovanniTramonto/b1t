<template>
  <main class="l-wrapper">
    <aside class="aside">
      <page-header />
      <navigation />
    </aside>

    <nuxt
      class="l-main"
      role="main" />
  </main>
</template>

<script>
import Navigation from '@/components/Navigation'
import PageHeader from '@/components/PageHeader'

export default {
  components: {
    Navigation,
    PageHeader
  }
}
</script>
