<template>
  <section class="projects-section py-5">
    <div class="container">
      <h2 class="text-center mb-5">Mes Projets</h2>

      <div class="row">
        <div class="col-md-6 mb-4" v-for="project in projects" :key="project.id" data-aos="fade-up">
          <div class="card project-card h-100">
            <div class="card-body">
              <h3 class="card-title">{{ project.title }}</h3>
              <p class="card-text">{{ project.description }}</p>
              <ul class="list-unstyled">
                <li v-for="(tech, idx) in project.technologies" :key="idx">
                  <strong>{{ tech }}</strong>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ProjetsFr',
  data() {
    return {
      projects: [
        {
          id: 1,
          title: 'NodeBuster',
          description: 'NodeBuster est un projet développé en Java, où j\'ai appliqué les principes de la programmation orientée objet et de gestion de données. (C1-Réaliser, C4-Conduire, C6-Collaborer)',
          technologies: ['Java', 'POO', 'Gestion de données']
        },
        {
          id: 2,
          title: 'Astro-Photographie',
          description: 'Astro-Photographie est un projet réalisé en binôme, où j\'ai utilisé la bibliothèque Astroquery pour récupérer des données astronomiques et les afficher. (C1-Réaliser, C2-Optimisation, C4-Conduire, C6-Collaborer)',
          technologies: ['Python', 'Astroquery', 'Visualisation de données']
        },
        {
          id: 3,
          title: 'Magasin Connect',
          description: 'Magasin Connect permet de gérer le stock d\'un magasin, créer une liste de courses et afficher le chemin optimal. (C1-Réaliser, C2-Optimisation, C4-Conduire, C6-Collaborer)',
          technologies: ['Java', 'Algorithmes', 'Gestion de stock']
        },
        {
          id: 4,
          title: 'Projet PHP',
          description: 'Application web de gestion et classement des étudiants selon leurs résultats académiques. (C1-Réaliser, C2-Optimisation, C3-Administer, C4-Conduire)',
          technologies: ['PHP', 'MySQL', 'CRUD']
        },
        {
          id: 5,
          title: 'Node.js API',
          description: 'API dédiée à la gestion des cartes Pokémon avec un système d\'authentification sécurisé. (C1-Réaliser, C2-Optimisation, C4-Conduire)',
          technologies: ['Node.js', 'Express', 'JWT', 'MongoDB']
        },
        {
          id: 6,
          title: 'Vue.js API',
          description: 'Interface web dynamique pour exploiter l\'API Pokémon. (C1-Réaliser, C2-Optimisation, C4-Conduire, C5-Gérer)',
          technologies: ['Vue.js', 'API REST', 'Frontend']
        },
        {
          id: 7,
          title: 'Flutter API',
          description: 'Application mobile inspirée de Minecraft permettant d\'explorer les objets et recettes du jeu. (C1-Réaliser, C2-Optimisation, C4-Conduire, C5-Gérer)',
          technologies: ['Flutter', 'Dart', 'Mobile']
        },
        {
          id: 8,
          title: 'Socket Projet',
          description: 'Jeu du Morpion en réseau où deux joueurs peuvent s\'affronter, avec gestion des spectateurs et des multiples parties. (C1-Réaliser, C2-Optimisation, C4-Conduire)',
          technologies: ['Socket.io', 'Node.js', 'Temps réel']
        },
        {
          id: 9,
          title: 'ERP',
          description: 'Application de gestion d\'entreprise pour organiser les commandes, les produits et les employés.',
          technologies: ['Full-stack', 'Base de données', 'Gestion']
        }
      ]
    }
  }
}
</script>

<style scoped>
.project-card {
  transition: transform 0.3s, box-shadow 0.3s;
}
.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.2);
}
</style>
