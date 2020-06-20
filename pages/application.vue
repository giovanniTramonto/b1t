<template>
  <main
    role="main"
    class="console"
    @keydown="onKeydownConsole"
    @click="onClickConsole"
  >
    <div class="console__wrapper">
      <div class="console__message">
        <div id="typed-strings">
          <p>
            Hi, I am a type designer and font engineer based in Berlin.<br>
            I’ve studied type design in Paris (my hometown) and in Reading (UK).<br>
            I have been drawing and mastering letters in LA (LuxTypo), London (Dalton Maag) and Berlin (Monotype).<br>
            I am now freelancing.<br>
            I have been heading the design and production of the new Noto Sans Oriya (variable font family) for Google fonts last. I would be happy and thrilled to assist you guys at Source Type.<br>
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
  layout: 'console',

  data() {
    return {
      isTypingComplete: false
    }
  },

  mounted() {
    new Typed('#typed', {
      stringsElement: '#typed-strings',
      typeSpeed: 30,
      onComplete: () => {
        this.isTypingComplete = true
      }
    })
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
        this.$router.push('/')
      }
    }
  }
}
</script>

<style lang="scss">
.console {
  padding: 5vw 10vw;
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
    font-size: 40px;
  }
}
</style>
