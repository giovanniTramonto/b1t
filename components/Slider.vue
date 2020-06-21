<template>
  <div
    :class="$style.slider"
    @click="slideTo"
  >
    <div :class="$style.sliderInner">
      <div
        ref="slider"
        :class="$style.slides"
      >
        <div
          v-for="(slide, index) in slides"
          ref="slides"
          :class="$style.slide"
          :data-index="index"
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
        @click="scrollSlideIntoView(index)" />
    </ul>
  </div>
</template>

<script>
const SLIDE_TIMEOUT = 5000

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
      iterations: false,
      observers: null,
      slideTimeout: null
    }
  },

  mounted() {
    this.observers = new WeakMap()
    for (const slide of this.$refs.slides) {
      const observer = this.createSlideObserver()
      observer.observe(slide)
      this.observers.set(observer)
    }
    this.slideAutomatically()
  },

  beforeDestroy() {
    clearTimeout(this.slideTimeout)
    this.observers = null
  },

  methods: {
    slideTo(event) {
      console.log(event, window, window.innerWidth)
      this.scrollSlideIntoView(
        this.getPosition(
          event.clientX > window.innerWidth / 2 ? 'next' : 'prev'
        )
      )
    },
    getPosition(direction) {
      let p = 0
      const { slides } = this
      const position = Number(this.position)
      if (direction === 'next') {
        p = position + 1
      } else if (direction === 'prev') {
        p = position - 1
      }
      console.log(direction, position, p)
      return p < slides.length && p >= 0 ? p : position
    },
    scrollSlideIntoView(position) {
      console.log(this.$refs.slides, this.$refs.slides[position], position)
      this.$refs.slides[position].scrollIntoView({
        behavior: 'smooth'
      })
      this.slideAutomatically()
    },
    onIntersection([entries]) {
      if (entries.isIntersecting) {
        this.position = entries.target.dataset.index
      }
      this.slideAutomatically()
    },
    createSlideObserver() {
      return new IntersectionObserver(this.onIntersection, {
        rootMargin: '0px',
        threshold: 1.0
      })
    },
    slideAutomatically() {
      clearTimeout(this.slideTimeout)
      this.slideTimeout = setTimeout(() => {
        this.slideTo({
          clientX: window.innerWidth
        })
      }, SLIDE_TIMEOUT)
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
  overflow-x: auto;
  overflow-y: hidden;
  scroll-snap-type: x mandatory;
  scroll-snap-coordinate: 0 0; // Deprecated.
  scroll-snap-points-x: repeat(100%); // Deprecated.
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
