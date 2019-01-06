<template>
  <section class="l-block">
    <slider :slides="slides" />
  </section>
</template>

<script>
import Slider from '@/components/Slider'

export default {
  components: {
    Slider
  },

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
