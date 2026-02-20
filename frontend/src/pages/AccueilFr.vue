<template>
  <div class="neo-section neo-min">
    <div class="neo-content">
      <section class="text-center py-5 scroll-animate">
        <div class="container">
          <h1 class="mb-4 neo-heading">Romain SIAME - Étudiant en BUT Informatique & Développeur web en devenir</h1>
          <p class="lead mb-3 neo-subheading">Passionné par la programmation, le développement d'applications et les défis techniques.</p>
        </div>
      </section>

      <section class="py-5 scroll-animate">
      <div class="container">
        <h2 class="mb-4 neo-heading">À Propos de moi</h2>
        <div class="row align-items-center">
          <div class="col-md-6">
            <p>Étudiant en 3ème année BUT Informatique à l'IUT du Littoral Côte d'Opale, je me spécialise dans la conception, le développement et la validation d'applications. Mon parcours est enrichi par des expériences en projets personnels, un service civique ainsi que ma passion pour les nouvelles technologies.</p>
          </div>
          <div class="col-md-6 text-center">
            <img src="/img/photo-profil.jpg" alt="Photo de Romain SIAME" class="img-fluid rounded-circle" style="max-width: 250px;">
          </div>
        </div>
      </div>
    </section>

      <section class="neo-surface py-5 scroll-animate">
        <div class="container">
          <h2 class="mb-5 text-center neo-heading">Ma Formation</h2>
          <div class="timeline scroll-stagger">
            <div class="timeline-item mb-4">
              <div class="timeline-content card neo-card p-3">
              <h4>Janvier 2024 - Présent</h4>
              <p>BUT Informatique - IUT du Littoral Côte d'Opale, Calais<br>Parcours A : Réalisation d'applications</p>
            </div>
          </div>
          <div class="timeline-item mb-4">
            <div class="timeline-content card neo-card p-3">
              <h4>Septembre 2023 - Janvier 2024</h4>
              <p>1ère année Ingénieur Informatique - IG2I Lens</p>
            </div>
          </div>
          <div class="timeline-item mb-4">
            <div class="timeline-content card neo-card p-3">
              <h4>2023</h4>
              <p>Bac Général (Mathématiques & NSI) - Lycée Blaise Pascal Longuenesse<br><em>Mention Bien</em></p>
            </div>
          </div>
          </div>
        </div>
      </section>

      <section class="py-5 scroll-animate">
        <div class="container">
          <h2 class="mb-4 neo-heading">Mon Expérience Professionnelle</h2>
          <p><strong>Novembre 2021 - Mai 2022</strong><br>
          Service Civique - AOSM Basket Saint-Martin-Lez Tatinghem<br>
          Encadrement et apprentissage du basket à des enfants de 4 à 9 ans.</p>
        </div>
      </section>

      <section class="neo-surface py-5 text-center download-cv-section scroll-animate">
        <div class="container">
          <a :href="cvUrl" class="btn btn-primary" download>Télécharger mon CV</a>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { useScrollAnimation } from '../composables/useScrollAnimation'

export default {
  name: 'AccueilFr',
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
