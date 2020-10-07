<template>
  <div class="l-app">
    <nav
      class="navigation"
      role="navigation"
    >
      <page-header />
      <page-menu />
    </nav>
    <nuxt />
  </div>
</template>

<script>
import PageMenu from '@/components/PageMenu'
import PageHeader from '@/components/PageHeader'

export default {
  components: {
    PageMenu,
    PageHeader
  }
}
</script>
