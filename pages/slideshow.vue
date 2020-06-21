<template>
  <main
    role="main"
    class="slideshow"
  >
    <Slider
      :slides="portfolioSlides"
      class="slideshow__slider"
      shuffle
    />
  </main>
</template>

<script>
import Typed from 'typed.js'
import Slider from '@/components/Slider'
import { mapGetters } from 'vuex'

export default {
  components: { Slider },
  layout: 'portfolio',

  computed: {
    ...mapGetters('slides', ['portfolioSlides'])
  }
}
</script>

<style lang="scss">
.slideshow {
  height: 100%;

  &__slider {
    height: 100%;
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
