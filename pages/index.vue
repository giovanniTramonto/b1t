<template>
  <main class="l-wrapper">
    <header class="header">
      <h1 class="header__title">amélie bonet</h1>
      <ul class="header__category-list">
        <li>graphic design</li>
        <li>type design</li>
        <li>lettering</li>
      </ul>
    </header>

    <section class="l-block">
      <p>
        <a href="mailto:hello@ameliebonet.com">hello@ameliebonet.com</a><br>
        <a href="tel:+4901796135725">+49 (0) 179 613 57 25</a>
      </p>
    </section>

    <section class="l-block">
      <slider :slides="slides" />
    </section>

    <section class="l-block">
      <p>I am a Berlin based designer</p>
      <ul class="l-list">
        <li>Graduated in 2005 with a MA in type design from École Estienne (Paris, France)</li>
        <li>Graduated in 2009 with a MA in type design from University of Reading (United Kingdom)</li>
        <li>Worked 5 years for Dalton Maag on design</li>
        <li>Worked 3 years for Monotype on design and production</li>
      </ul>
    </section>

    <section class="l-block">
      <p>When I am not collaborating with other designers, I work on my own type projects, commissioned or self-initiated. I am specialised in extending Latin typefaces and logos to different writing systems, such as Greek, Cyrillic, Devanagari, Bengali, Georgian or Tamil. Additionally, I have given conferences and conducted workshops about my worldwide typographic experiences; the last <a href="">lecture</a> was for <a href="">Kerning Conference</a> in Faenza, Italy.</p>
      <p>For questions on lettering, design and development of custom typefaces, feel free to <a href="">contact</a> me. My portfolio is available on request. You can also follow me on <a href="">Instagram</a>.</p>
      <p>I am a member of <a href="">Alphabettes</a>. I am part of the <a href="">Gray Voice Ensemble</a> project as writer and singer. Pour le public français, j’ai également créé avec Mickaël LeGoff deux vidéos à propos de la police Comic Sans de Vincent Connare, <a href="">Chez Michel</a> et <a href="">Guru</a>.</p>
    </section>
  </main>
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
