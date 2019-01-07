<template>
  <header class="header">
    <nuxt-link
      to="/"
      class="header__title as-h1 as-h1--top">
      amélie bonet
    </nuxt-link>
    <p>
      For questions about my work, feel free to contact me.<br>
      My portfolio is available on request. You can also follow me on Instagram.<br>
      <a href="mailto:hello@ameliebonet.com">hello@ameliebonet.com</a>
    </p>
  </header>
</template>

<style lang="scss">
.header {
  position: fixed;
  z-index: map-get($zindex, 'navigation');
  top: 2rem;
  left: 2rem;

  &__title {
    color: map-get($colors, 'text');
    display: block;
  }
}
</style>
