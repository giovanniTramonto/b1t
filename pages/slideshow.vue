<template>
  <main
    role="main"
    class="slideshow"
  >
    <Slider
      :slides="slides"
      class="slideshow__slider"
    />
  </main>
</template>

<script>
import Typed from 'typed.js'
import Slider from '@/components/Slider'

export default {
  components: { Slider },
  layout: 'portfolio',

  data() {
    return {
      slides: [
        {
          default: 'images/portfolio/D.jpg'
        },
        {
          default: 'images/portfolio/F.jpg'
        },
        {
          default: 'images/portfolio/G.jpg'
        },
        {
          default: 'images/portfolio/J.jpg'
        },
        {
          default: 'images/portfolio/L.jpg'
        },
        {
          default: 'images/portfolio/O.jpg'
        },
        {
          default: 'images/portfolio/Q.jpg'
        },
        {
          default: 'images/portfolio/R.jpg'
        },
        {
          default: 'images/portfolio/S.jpg'
        },
        {
          default: 'images/portfolio/Y.jpg'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.slideshow {
  &__slider {
    height: 100vh;
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
