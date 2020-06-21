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
            Hi, my name is <b>Amélie Bonet</b>.^1000 <br>
            I am a type designer and font engineer based in Berlin.<br>
            I’ve studied type design in Paris (my hometown) and in Reading (UK).<br>
            I have been drawing and mastering letters in LA (LuxTypo), London (Dalton Maag) and Berlin (Monotype).<br>
            I am now free^1000lancing.<br>
            I have been heading the design and production of the new Noto Sans Oriya (variable font family) for Google Fonts last. I would be happy to assist you guys at Source Type.<br>
            And not to forget, I am most of the time surrounded by music when I push nodes and pull curves.<br>
            <br>
            To find out more, press any key
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

    document.addEventListener('keydown', this.onKeydownConsole)
  },

  beforeDestroyed() {
    this.isTypingComplete = false
    this.showTyping = false
    document.removeEventListener('keydown', this.onKeydownConsole)
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
  padding: 0 10vw 20vw;
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
