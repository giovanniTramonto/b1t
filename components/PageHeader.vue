<template>
  <header class="l-block header">
    <nuxt-link
      to="/"
      class="header__title as-h1 as-h1--top">
      amélie bonet
    </nuxt-link>
    <p>
      <a href="mailto:hello@ameliebonet.com">hello@ameliebonet.com</a>
    </p>
  </header>
</template>

<style lang="scss">
.header {
  &__title {
    color: map-get($colors, 'text');
    display: block;
  }
}
</style>
