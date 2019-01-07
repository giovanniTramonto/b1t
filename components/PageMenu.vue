<template>
  <div
    class="menu">
    <ul>
      <li class="menu__info">
        <nuxt-link to="#info">Info</nuxt-link>
      </li>
      <li class="menu__references">
        <nuxt-link to="#references">References</nuxt-link>
      </li>
      <li class="menu__talks">
        <nuxt-link to="#talks">Talks</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<style lang="scss">
.menu {
  li {
    margin: 0;
  }

  .nuxt-link-exact-active {
    color: map-get($colors, 'text');
  }
}

@include media('<=tablet') {
  .menu {
    padding: 1rem;
  }
}

@include media('>tablet') {
  .menu {
    position: absolute;
    z-index: map-get($zindex, 'navigation');
    top: 0;
    left: 0;

    &__info,
    &__references,
    &__talks {
      position: fixed;
    }

    &__info {
      left: 2rem;
      bottom: 2rem;
    }

    &__references {
      right: 2rem;
      top: 2rem;
    }

    &__talks {
      right: 2rem;
      bottom: 2rem;
    }
  }
}
</style>
