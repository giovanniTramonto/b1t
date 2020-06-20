<template>
  <div
    :class="$style.slider"
    @click="swipe('next')"
  >
    <div :class="$style.sliderInner">
      <div :class="$style.slides">
        <div
          v-for="(slide, index) in slides"
          ref="slides"
          :class="$style.slide"
          :key="index">
          <picture :class="$style.picture">
            <template v-if="slide.large">
              <source
                v-if="slide.large"
                :srcset="`${path}${slide.large}`"
                media="(min-width: 450px)">
              <img :srcset="`${path}${slide.default}`">
            </template>
            <template v-else>
              <img :src="`${path}${slide.default}`">
            </template>
          </picture>
        </div>
      </div>
    </div>
    <ul
      v-if="iterations"
      :class="$style.iterator">
      <li
        v-for="(slide, index) in slides"
        :key="index"
        :class="[
          $style.iterateItem,
          { [$style.iterateItemSelected]: index === Math.abs(position) }]"
        @click="swipe(index)" />
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    slides: {
      type: Array,
      default() {
        return []
      }
    },
    path: {
      type: String,
      default: '/'
    }
  },

  data() {
    return {
      position: 0,
      iterations: false
    }
  },

  methods: {
    swipe(pos) {
      this.setPosition(pos)
      // this.scrollSlideIntoView()
    },
    setPosition(pos) {
      const { position, slides } = this
      if (pos === 'next') {
        pos = position + 1
      } else if (pos === 'prev') {
        pos = position - 1
      }
      const p = pos > slides.length - 1 ? 0 : pos
      this.position = p === -1 ? slides.length - 1 : p
    },
    scrollSlideIntoView() {
      this.$refs.slides[this.position].scrollIntoView({
        behavior: 'smooth'
      })
    }
  }
}
</script>


<style lang="scss" module>
.slider {
  position: relative;
}
.sliderInner {
  overflow: hidden;
}
.slides {
  height: inherit;
  position: relative;
  display: flex;
  flex-flow: row nowrap;
  // transition: left 0.5s;
  overflow-x: auto;
  overflow-y: hidden;
  scroll-snap-type: x mandatory;
  scrollbar-width: none; // Firefox
  -webkit-overflow-scrolling: touch;

  &::-webkit-scrollbar {
    display: none; // Safari and Chrome
  }
}
.slide {
  max-width: 100vw;
  height: inherit;
  overflow: hidden;
  flex: 1 0 100%;
  scroll-snap-align: start center;
}

.picture {
  display: block;
  line-height: 0;
  text-align: center;
  height: inherit;

  img {
    max-width: 100%;
    width: auto;
    height: auto;
  }
}

.iterator {
  position: absolute;
  bottom: 0.5rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
}
.iterateItem {
  display: block;
  width: 0.5rem;
  height: 0.5rem;
  margin: 0.5rem;
  background: map-get($colors, 'link');
  border-radius: 50%;
  margin: 0.3rem;
  transition: width 0.2s, height 0.2s;
  cursor: pointer;
  user-select: none;
}
.iterateItemSelected {
  width: 0.8rem;
  height: 0.8rem;
  cursor: default;
}
</style>
