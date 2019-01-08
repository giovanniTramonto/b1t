<template>
  <div :class="$style.slider">
    <span
      :class="[$style.control, $style.controlPrev]"
      @click="swipe('prev')" />
    <span
      :class="[$style.control, $style.controlNext]"
      @click="swipe('next')" />
    <div :class="$style.sliderInner">
      <div
        :class="$style.slides"
        :style="getInnerStyle">
        <div
          v-for="(slide, index) in slides"
          :class="$style.slide"
          :key="index">
          <picture :class="$style.picture">
            <source
              :srcset="`${path}${slide.large}`"
              media="(min-width: 450px)">
            <img
              :srcset="`${path}${slide.default}`"
              alt="">
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

  computed: {
    getInnerStyle() {
      return {
        left: `${this.position * 100}%`
      }
    }
  },

  methods: {
    swipe(pos) {
      const { position, slides } = this
      if (pos === 'next') {
        pos = position - 1
      } else if (pos === 'prev') {
        pos = position + 1
      } else {
        pos = pos * -1
      }
      const p = Math.abs(pos) > slides.length - 1 ? 0 : pos
      this.position = p === 1 ? (slides.length - 1) * -1 : p
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
  position: relative;
  display: flex;
  flex-flow: row nowrap;
  transition: left 0.5s;
}
.slide {
  flex: 1 0 100%;
}

.control {
  position: absolute;
  z-index: 2;
  width: 50%;
  top: 0;
  bottom: 0;
  user-select: none;

  :focus,
  :active {
    outline: none;
  }
}
.controlNext {
  right: 0;
  cursor: e-resize;
}
.controlPrev {
  left: 0;
  cursor: w-resize;
}

.picture {
  display: block;
  line-height: 0;

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
