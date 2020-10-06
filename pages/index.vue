<template>
  <main
    v-show="showTyping"
    role="main"
    class="console"
    @click="onClickConsole"
  >
    <div class="console__wrapper">
      <div class="console__message">
        <div id="typed-strings">
          <p>
            Hi there,<br>
            My name is <b>Amélie Bonet.</b>.^1000 <br>
            Originally from Paris, I am a type designer and font engineer based in Berlin. <br>
            <br>
            I am a graduate of the École Estienne (MA typography &amp; typeface design), the École des Arts Décoratifs (graphic design) and the University of Reading (MA typeface design).<br>
            <br>
            I drawn letters and produced fonts for companies such as LuxTypo (Los Angeles), Dalton Maag (London) and Monotype (Berlin).<br>
            <br>
            I am now free^1000lancing.<br>
            I have recently been heading the design and production of the new Noto Sans Oriya for Google fonts.<br>
            <br>
            I am working with Glyphs.<br>
            <br>
            I would be happy to join your team at Brand New Type.<br>
            Click here to download my resume or press any key to see more of my work.
          </p>
        </div>
        <span id="typed" />
      </div>
    </div>
  </main>
</template>

<script>
import Typed from 'typed.js'

export default {
  layout: 'portfolio',

  data() {
    return {
      isTypingComplete: false,
      showTyping: false
    }
  },

  mounted() {
    new Typed('#typed', {
      stringsElement: '#typed-strings',
      typeSpeed: 30,
      onBegin: () => {
        this.showTyping = true
      },
      onComplete: () => {
        this.isTypingComplete = true
      }
    })

    window.addEventListener('keydown', this.onKeydownConsole, false)
  },

  beforeDestroyed() {
    this.isTypingComplete = false
    this.showTyping = false
    window.removeEventListener('keydown', this.onKeydownConsole, false)
  },

  methods: {
    onKeydownConsole() {
      this.goToNextpage()
    },
    onClickConsole() {
      this.goToNextpage()
    },
    goToNextpage() {
      if (this.isTypingComplete) {
        this.$router.push('/slideshow')
      }
    }
  }
}
</script>

<style lang="scss">
.console {
  padding: 10vw;
  height: 100%;
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
