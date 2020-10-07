<template>
  <main
    role="main"
    class="resume"
  >
    <navigation />
    <div class="resume__contents">
      <section class="resume-section">
        <header>&nbsp;</header>
        <ul class="resume-section__list">
          <li>
            <p class="indent">
              Kadiner Straße 12<br>
              10243 Berlin – Germany<br>
              0049 179 613 5725
            </p>
            <h3><strong>Amélie Bonet</strong></h3>
            <p>
              <a href="mailto:hello@ameliebonet.com">hello@ameliebonet.com</a><br>
              @ameacute (instagram)
            </p>
          </li>
        </ul>
      </section>
      <section class="resume-section">
        <header>Experience</header>
        <ul class="resume-section__list">
          <li>
            <h3><strong>Type designer & Font Engineer</strong> (2005–now)</h3>
            <p>
              Some customers to date are: Margaret Gray, Lux Typographics, Fontself, Sarah Boris, Intégral Ruedi Baur et associés, Indian Type Foundry, Black Foundry, URW and Google Fonts.
            </p>
          </li>
          <li>
            <h3><strong>Font Engineer at Monotype</strong>, Berlin (2015–2018)</h3>
            <p>
              Font engineer and type designer for internal and external projetcs. Specifically involved in the creation and production of Indic projects, such as Neue Frutiger Tamil (with Pria Ravichanadran) and Swiss 721 Devanagari.
            </p>
          </li>
          <li>
            <h3><strong>Senior Type Designer at Dalton Maag Ltd</strong>, Londres (2010–15)</h3>
            <p>
              Responsible of major projects such as Ubuntu Monospace & Condensed, Ubuntu Arabic, Nokia Pure Devanagari & Bengali, HP Simplified Devanagari and Intel Clear Devanagari.
            </p>
          </li>
          <li>
            <h3><strong>Graphic Designer at Chase Design Group</strong>, Los Angeles (2007–08)</h3>
            <p>
              Packaging designer for American, Canadian and Mexican products.
            </p>
          </li>
          <li>
            <h3><strong>Type Designer at Intégral Ruedi Baur et associés</strong>, Paris (2006)</h3>
            <p>
              Co-Designer of the icon system for the PSA Peugeot Citroën cars.
            </p>
          </li>
        </ul>
      </section>
      <section class="resume-section">
        <header>Studies</header>
        <ul class="resume-section__list">
          <li>
            <h3><strong>MA Typeface Designat University of Reading</strong>, Reading (2008–09)</h3>
            <p>
              with merit
            </p>
          </li>
          <li>
            <h3><strong>DSAA Création Typographique at École Estienne</strong>, Paris (2003–05)</h3>
            <p>
              with distinction
            </p>
          </li>
        </ul>
      </section>
      <section class="resume-section">
        <header>SOFTWARES</header>
        <ul class="resume-section__list">
          <li>
            <p>
              Glyphs, FontLab, MergeFonts, MetricMachine.<br>
              VOLT, FontValidator, TTX, OTM.<br>
              Creative Suite Adobe
            </p>
          </li>
        </ul>
      </section>
      <section class="resume-section">
        <header>SYSTEMS</header>
        <ul class="resume-section__list">
          <li>
            <p>
              <strong>Advanced knowledge</strong> in Greek, Cyrillic, Devanagari, Bengali, Tamil and Oriya.<br>
              <strong>Simple knowledge</strong> in Gujarati, Gurmukhi, Arabic and Thai.<br>
              <strong>Interest</strong> for Malayalam, Telugu, Kannada and Amharic.
            </p>
          </li>
        </ul>
      </section>
      <section class="resume-section">
        <header>LANGUAGES</header>
        <ul class="resume-section__list">
          <li>
            <p>
              <strong>English</strong> proficient level<br>
              <strong>French</strong> mother tongue<br>
              <strong>German</strong> upper level<br>
              <strong>Spanish</strong> basic level
            </p>
          </li>
        </ul>
      </section>
    </div>
  </main>
</template>

<script>
import Navigation from '@/components/Navigation'

export default {
  components: { Navigation },
  layout: 'portfolio'
}
</script>

<style lang="scss">
.resume {
  &__contents {
    margin-top: var(--nav-height);
  }
}

.resume-section {
  margin: 0 auto;
  max-width: 800px;
  padding: 30px 20px;

  @include media('>tablet') {
    display: flex;
  }

  header {
    flex: 1;
    margin: 0 10px 20px 0;
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }

  a {
    color: inherit;
  }

  h3 {
    font-size: inherit;
  }

  p.indent,
  h3 + p {
    padding-left: 10px;
  }

  &__list {
    flex: 3;

    li + li {
      margin-top: 20px;
    }
  }
}
</style>
