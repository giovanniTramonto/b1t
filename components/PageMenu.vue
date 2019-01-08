<template>
  <div
    class="menu">
    <ul>
      <li class="menu__info">
        <a
          href="#info"
          @click.prevent="scrollTo">
          Info
        </a>
      </li>
      <li class="menu__references">
        <a
          href="#references"
          @click.prevent="scrollTo">
          References
        </a>
      </li>
      <li class="menu__talks">
        <a
          href="#talks"
          @click.prevent="scrollTo">
          Talks
        </a>
      </li>
    </ul>
  </div>
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
