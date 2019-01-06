<template>
  <nav
    class="navigation l-block"
    role="navigation">
    <ul>
      <li>
        <nuxt-link to="/">Home</nuxt-link>
      </li>
      <li>
        <nuxt-link to="info">Info</nuxt-link>
      </li>
      <li>
        <nuxt-link to="references">References</nuxt-link>
      </li>
      <li>
        <nuxt-link to="talks">Talks</nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss">
.navigation {
  width: 250px;

  li {
    margin: 0;
  }

  .nuxt-link-exact-active {
    color: map-get($colors, 'text');
  }
}
</style>
