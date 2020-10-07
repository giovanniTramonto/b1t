<template>
  <main
    class="l-main l-wrapper"
    role="main"
  >
    <home />
    <info />
    <references />
    <talks />
  </main>
</template>

<script>
import Home from '@/components/sections/Home'
import Info from '@/components/sections/Info'
import References from '@/components/sections/References'
import Talks from '@/components/sections/Talks'

export default {
  components: {
    Home,
    Info,
    References,
    Talks
  }
}
</script>
