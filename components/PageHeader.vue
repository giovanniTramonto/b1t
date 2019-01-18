<template>
  <header class="header">
    <a
      href="/"
      class="header__title h1 h1--top"
      @click.prevent="scrollTo">
      amélie bonet
    </a>
    <p>
      <a href="mailto:hello@ameliebonet.com">hello@ameliebonet.com</a>
    </p>
  </header>
</template>

<script>
import scrollTo from '@/utils/scroll-to'

export default {
  methods: {
    scrollTo
  }
}
</script>

<style lang="scss">
.header {
  &__title {
    color: map-get($colors, 'text');
    display: block;
  }
}

@include media('<=tablet') {
  .header {
    padding: 1rem;
  }
}

@include media('>tablet') {
  .header {
    top: 2rem;
    left: 2rem;
    position: fixed;
    z-index: map-get($zindex, 'navigation');
  }
}
</style>
