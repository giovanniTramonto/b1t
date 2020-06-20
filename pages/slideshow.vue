<template>
  <main
    role="main"
    class="slideshow"
  >
    <slider :slides="slides" />
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
          default: 'images/slides7--w900.jpg',
          large: 'images/slides7--w1800.jpg'
        },
        {
          default: 'images/slides8--w900.jpg',
          large: 'images/slides8--w1800.jpg'
        },
        {
          default: 'images/slides9--w900.jpg',
          large: 'images/slides9--w1800.jpg'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.console {
  padding: 15vw 10vw;
  height: 100vh;
  display: flex;
  align-items: flex-end;

  &__wrapper {
    flex: 1;
    min-height: 100%;
    display: flex;
    align-items: center;
  }

  &__message {
    flex: 1;
    position: relative;
    font-size: calc(14px + (26 - 14) * ((100vw - 300px) / (1600 - 300)));
  }
}
</style>
