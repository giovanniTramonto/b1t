<template>
  <div
    :class="$style.slider"
    @click="slideTo"
  >
    <div :class="$style.sliderInner">
      <div
        ref="slider"
        :class="$style.slides"
        @scroll="onScroll"
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
import scrollIntoView from 'scroll-into-view-if-needed'
import smoothScrollIntoView from 'smooth-scroll-into-view-if-needed'

const SLIDE_TIMEOUT = 2000

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
      showSlider: false,
      position: 0,
      iterations: false,
      observer: null,
      slideTimeout: null,
      scrollIntoViewSmoothly: () => {}
    }
  },

  mounted() {
    this.observer = new IntersectionObserver(this.onIntersection, {
      root: this.$refs.slider,
      rootMargin: '0px',
      threshold: 0.95
    })
    for (const slide of this.$refs.slides) {
      this.observer.observe(slide)
    }

    this.setScrollIntoView()
    this.slideAutomatically()
  },

  beforeDestroy() {
    clearTimeout(this.slideTimeout)
    this.observers = null
  },

  methods: {
    setScrollIntoView() {
      // To support ie. safari iOS smooth scroll
      this.scrollIntoViewSmoothly =
        'scrollBehavior' in document.documentElement.style
          ? scrollIntoView
          : smoothScrollIntoView
    },
    slideTo(event) {
      const position = this.getPosition(
        event.clientX > window.innerWidth / 2 ? 'next' : 'prev'
      )
      this.scrollSlideIntoView(position)
      this.position = position
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
      return p < slides.length && p >= 0 ? p : position
    },
    scrollSlideIntoView(position) {
      this.scrollIntoViewSmoothly(this.$refs.slides[position], {
        behavior: 'smooth'
      })
      this.slideAutomatically()
    },
    onIntersection([entry]) {
      if (entry.isIntersecting) {
        this.position = entry.target.dataset.index
      }
      this.slideAutomatically()
    },
    onScroll() {
      // That’s actually only for browser that don’t support scroll snapping
      this.slideAutomatically()
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
  overflow: hidden;
  max-width: 100vw;
  height: inherit;
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
