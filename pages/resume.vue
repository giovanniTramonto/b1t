<template>
  <main
    role="main"
    class="resume"
  >
    <navigation />
    <div class="resume__contents">
      <section class="resume-section">
        <header>Experience</header>
        <ul class="resume-section__list">
          <li>
            <h3><strong>Type designer & Font Engineer</strong> (2005–now)</h3>
            <p>
              Some customers to date are: Lux&nbsp;Typographics, Fontself, Sarah&nbsp;Boris, Intégral&nbsp;Ruedi&nbsp;Baur&nbsp;et&nbsp;associés, Indian&nbsp;Type&nbsp;Foundry, Black&nbsp;Foundry, URW++ and Google&nbsp;Fonts.
            </p>
          </li>
          <li>
            <h3><strong>Font Engineer at Monotype</strong>, Berlin (2015–2018)</h3>
            <p>
              Font engineer and type designer for internal and external projetcs. Specifically involved in the creation and production of Indic projects, such as Neue Frutiger Tamil (with Pria&nbsp;Ravichandran) and Swiss&nbsp;721 Devanagari.
            </p>
          </li>
          <li>
            <h3><strong>Senior Type Designer at Dalton Maag Ltd</strong>, Londres (2010–15)</h3>
            <p>
              Responsible of major projects such as Ubuntu Monospace &amp; Condensed, Ubuntu&nbsp;Arabic, Nokia&nbsp;Pure Devanagari &amp; Bengali, HP&nbsp;Simplified&nbsp;Devanagari and Intel&nbsp;Clear&nbsp;Devanagari.
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
        <header>Softwares</header>
        <ul class="resume-section__list">
          <li>
            <p>
              Glyphs, FontLab, MergeFonts, MetricMachine.<br>
              VOLT, FontValidator, TTX, OTM.<br>
              Creative Suite Adobe.
            </p>
          </li>
        </ul>
      </section>
      <section class="resume-section">
        <header>Systems</header>
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
        <header>Languages</header>
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
      <section class="resume-section">
        <header>Jury</header>
        <ul class="resume-section__list">
          <li>
            <p>
              <strong>Post Diplôme at ANRT</strong>, Nancy, France (2019)<br>
              <strong>Post Diplôme Typographie et Langage at ÉSAD</strong>, Amiens, France (2019) <strong>with Kai Bernau</strong><br>
              <strong>DSAA Création Typographique at École Estienne</strong>, Paris (2018 &amp; 2019)<br>
            </p>
          </li>
        </ul>
      </section>
      <section class="resume-section">
        <header>Lectures</header>
        <ul class="resume-section__list">
          <li>
            <p>
              <strong>TypeWknd</strong>, online, World (2020) <strong>with Sol Matas</strong><br>
              <strong>École de Communication Visuelle</strong>, Paris (2019)<br>
              <strong>Kerning Conference</strong>, Faenza, Italy (2018)<br>
              <strong>Printemps de la Typograhie</strong>, Paris (2018)<br>
              <strong>TypoLABS</strong>, Berlin (2017 &amp; 2016)<br>
              <strong>Typo Renoir</strong>, Hong Kong (2012)<br>
              <strong>ATypI Hong Kong</strong>, China (2012) <strong>with Bruno Maag</strong><br>
              <strong>Symbiosis School of Design</strong>, Pune, India (2012)<br>
              <strong>National Institute of Design</strong>, Ahmenabad, India (2011 &amp; 2012)<br>
              <strong>Lettres Type</strong>, Nancy, France (2011)<br>
              <strong>ICTVC</strong>, Nicosia, Cyprus (2010) <strong>with Irene Vlachou</strong><br>
              <strong>École de Communication Visuelle</strong>, Paris (2006)
            </p>
          </li>
        </ul>
      </section>
      <section class="resume-section">
        <header>Awards</header>
        <ul class="resume-section__list">
          <li>
            <p>
              <strong>Third price—Granshan</strong>, Yerevan, Armenia (2014) Nokia Pure Bengali<br>
              <strong>Design of the Year—Design Museum</strong>, Londres (2012) Nokia Pure <strong>with Dalton Maag</strong><br>
            </p>
          </li>
        </ul>
      </section>
      <section class="resume-section">
        <header>Extra</header>
        <ul class="resume-section__list">
          <li>
            <p>
              <strong>Vox Pop Videos on Comic Sans</strong>, Berlin (2013)
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
  layout: 'portfolio',

  head() {
    return {
      htmlAttrs: {
        class: ['t-portfolio', 't-portfolio--resume']
      }
    }
  }
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

  header {
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
    li + li {
      margin-top: 20px;
    }
  }
}
</style>
