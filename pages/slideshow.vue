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
          default: 'images/portfolio/D.png'
        },
        {
          default: 'images/portfolio/F.png'
        },
        {
          default: 'images/portfolio/G.png'
        },
        {
          default: 'images/portfolio/J.png'
        },
        {
          default: 'images/portfolio/L.png'
        },
        {
          default: 'images/portfolio/O.png'
        },
        {
          default: 'images/portfolio/Q.png'
        },
        {
          default: 'images/portfolio/R.png'
        },
        {
          default: 'images/portfolio/S.png'
        },
        {
          default: 'images/portfolio/Y.png'
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
