<template>
  <section class="bg-light py-5">
    <div class="container">
      <h2 class="text-center mb-5 scroll-animate">💼 Compétences</h2>
      <div class="row scroll-stagger">
        <div class="col-md-4 mb-4" v-for="comp in competences" :key="comp.id">
          <div class="card shadow-sm h-100">
            <div class="card-body">
              <h5 class="card-title text-center">{{ comp.title }}</h5>
              <h6 class="card-subtitle mb-3 text-center">{{ comp.subtitle }}</h6>
              <p class="card-text">{{ comp.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { useScrollAnimation } from '../composables/useScrollAnimation'

export default {
  name: 'CompetencesFr',
  setup() {
    useScrollAnimation()
  },
  data() {
    return {
      competences: [
        {
          id: 1,
          title: 'C1 - Réaliser',
          subtitle: 'Développer des applications logicielles robustes et fonctionnelles',
          description: 'Conception et implémentation d\'applications en respectant les bonnes pratiques. Programmation avec divers langages (Java, Python, JavaScript, etc.).'
        },
        {
          id: 2,
          title: 'C2 - Optimisation',
          subtitle: 'Améliorer la performance et la qualité du code',
          description: 'Application des principes SOLID et des design patterns. Optimisation des requêtes et de la gestion des ressources. Refactoring et tests pour garantir un code propre et maintenable.'
        },
        {
          id: 3,
          title: 'C3 - Administrer',
          subtitle: 'Gérer l\'infrastructure et le déploiement des applications',
          description: 'Configuration et administration de bases de données (SQL, MongoDB). Déploiement et gestion des services via Docker, Nginx, Wamp, et hébergement cloud. Sécurisation des applications et gestion des accès utilisateurs.'
        },
        {
          id: 4,
          title: 'C4 - Gérer',
          subtitle: 'Planifier et organiser le développement d\'un projet informatique',
          description: 'Gestion de projet avec des outils comme Trello, Git. Rédaction de documentation technique et suivi des tâches. Analyse des besoins et élaboration d\'un cahier des charges.'
        },
        {
          id: 5,
          title: 'C5 - Conduire',
          subtitle: 'Piloter un projet et coordonner une équipe technique',
          description: 'Mise en place de méthodologies Agile / Scrum pour une gestion efficace. Suivi de l\'avancement et gestion des priorités. Communication et coordination entre les membres de l\'équipe.'
        },
        {
          id: 6,
          title: 'C6 - Collaborer',
          subtitle: 'Travailler efficacement en équipe et contribuer à des projets communs',
          description: 'Utilisation de Git/GitHub pour le travail collaboratif. Participation aux revues de code et aux décisions techniques. Communication efficace entre les développeurs.'
        }
      ]
    }
  }
}
</script>
