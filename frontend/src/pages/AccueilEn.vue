<template>
  <div class="neo-section neo-min">
    <div class="neo-content">
      <section class="text-center py-5 scroll-animate">
        <div class="container">
          <h1 class="mb-4 neo-heading">Romain SIAME - Computer Science Student & Aspiring Web Developer</h1>
          <p class="lead mb-3 neo-subheading">Passionate about programming, application development, and technical challenges.</p>
        </div>
      </section>

      <section class="py-5 scroll-animate">
      <div class="container">
        <h2 class="mb-4 neo-heading">About Me</h2>
        <div class="row align-items-center">
          <div class="col-md-6">
            <p>I am a second-year Computer Science student at IUT du Littoral Côte d'Opale, specializing in application design, development, and validation. My journey is enriched by personal projects, a civic service, and my passion for new technologies.</p>
          </div>
          <div class="col-md-6 text-center">
            <img src="/img/photo-profil.jpg" alt="Photo of Romain SIAME" class="img-fluid rounded-circle" style="max-width: 250px;">
          </div>
        </div>
      </div>
    </section>

      <section class="neo-surface py-5 scroll-animate">
        <div class="container">
          <h2 class="mb-5 text-center neo-heading">My Education</h2>
          <div class="timeline scroll-stagger">
            <div class="timeline-item mb-4">
              <div class="timeline-content card neo-card p-3">
              <h4>January 2024 - Present</h4>
              <p>BUT in Computer Science - IUT du Littoral Côte d'Opale, Calais<br>Track A: Application Development</p>
            </div>
          </div>
          <div class="timeline-item mb-4">
            <div class="timeline-content card neo-card p-3">
              <h4>September 2023 - January 2024</h4>
              <p>1st year Computer Engineering - IG2I Lens</p>
            </div>
          </div>
          <div class="timeline-item mb-4">
            <div class="timeline-content card neo-card p-3">
              <h4>2023</h4>
              <p>High School Diploma (Mathematics & Computer Science) - Lycée Blaise Pascal Longuenesse<br><em>With Honors</em></p>
            </div>
          </div>
          </div>
        </div>
      </section>

      <section class="py-5 scroll-animate">
        <div class="container">
          <h2 class="mb-4 neo-heading">My Professional Experience</h2>
          <p><strong>November 2021 - May 2022</strong><br>
          Civic Service - AOSM Basket Saint-Martin-Lez Tatinghem<br>
          Teaching and supervising basketball for children aged 4 to 9 years.</p>
        </div>
      </section>

      <section class="neo-surface py-5 text-center download-cv-section scroll-animate">
        <div class="container">
          <a :href="cvUrl" class="btn btn-primary" download>Download my CV</a>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { useScrollAnimation } from '../composables/useScrollAnimation'

export default {
  name: 'AccueilEn',
  setup() {
    useScrollAnimation()

    const cvUrl = `${import.meta.env.BASE_URL}cv/CV_Romain_SIAME.pdf`

    return {
      cvUrl
    }
  }
}
</script>

<style scoped>
.timeline-item { margin-bottom: 1rem; }
</style>
