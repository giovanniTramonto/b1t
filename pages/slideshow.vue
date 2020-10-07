<template>
  <main
    role="main"
    class="slideshow"
  >
    <navigation />
    <slider
      :slides="portfolioSlides"
      class="slideshow__slider"
      shuffle
    />
  </main>
</template>

<script>
import Typed from 'typed.js'
import Slider from '@/components/Slider'
import Navigation from '@/components/Navigation'
import { mapGetters } from 'vuex'

export default {
  components: { Slider, Navigation },
  layout: 'portfolio',

  computed: {
    ...mapGetters('slides', ['portfolioSlides'])
  }
}
</script>

<style lang="scss">
.slideshow {
  height: 100%;
  padding-top: var(--nav-height);

  &__slider {
    height: calc(100% - var(--nav-height));
    width: 100vw;

    & > div {
      height: 100%;
    }

    picture img {
      width: auto;
      max-width: none;
      height: 100%;
      max-height: 1000px;
    }
  }
}
</style>
