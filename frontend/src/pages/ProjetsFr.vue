<template>
  <section class="projects-section py-5">
    <div class="container">
      <h2 class="text-center mb-4 scroll-animate">Mes Projets</h2>
      
      <!-- Filtres -->
      <div class="filters-container text-center mb-5 scroll-animate">
        <button 
          @click="selectedFilter = 'Tous'"
          :class="['filter-btn', { active: selectedFilter === 'Tous' }]"
        >
          Tous ({{ projects.length }})
        </button>
        <button 
          v-for="category in categories" 
          :key="category"
          @click="selectedFilter = category"
          :class="['filter-btn', { active: selectedFilter === category }]"
        >
          {{ category }} ({{ getProjectCount(category) }})
        </button>
      </div>

      <!-- Projets filtrés -->
      <div class="row scroll-stagger">
        <div 
          class="col-md-6 col-lg-4 mb-4" 
          v-for="project in filteredProjects" 
          :key="project.id"
        >
            <div class="card project-card h-100 shadow-sm">
              <img v-if="project.image" :src="project.image" class="card-img-top" :alt="project.title" style="height: 200px; object-fit: cover;">
              <div class="card-body d-flex flex-column">
                <h5 class="card-title text-primary">{{ project.title }}</h5>
                <p class="card-text flex-grow-1">{{ project.description }}</p>
                <div class="mt-2">
                  <span v-for="(tech, idx) in project.technologies" :key="idx" class="badge bg-secondary me-1 mb-1">{{ tech }}</span>
                </div>
              </div>
            </div>
          </div>
      </div>

      <!-- Message si aucun projet -->
      <div v-if="filteredProjects.length === 0" class="text-center py-5">
        <p class="text-muted">Aucun projet trouvé pour cette catégorie.</p>
      </div>
    </div>
  </section>
</template>

<script>
import { useScrollAnimation } from '../composables/useScrollAnimation'

export default {
  name: 'ProjetsFr',
  setup() {
    useScrollAnimation()
  },
  data() {
    return {
      selectedFilter: 'Tous',
      categories: ['Web', 'Mobile', 'Backend', 'Frontend', 'Java', 'Python'],
      projects: [
        {
          id: 1,
          title: 'NodeBuster',
          description: 'Projet Java appliquant les principes de la POO et de gestion de données.',
          technologies: ['Java', 'POO', 'Gestion de données'],
          category: 'Java',
          image: '/img/nodeBuster1.png'
        },
        {
          id: 2,
          title: 'Astro-Photographie',
          description: 'Projet en binôme utilisant Astroquery pour récupérer et afficher des données astronomiques.',
          technologies: ['Python', 'Astroquery', 'Visualisation'],
          category: 'Python',
          image: '/img/Astro1.png'
        },
        {
          id: 3,
          title: 'Magasin Connect',
          description: 'Gestion de stock, création de liste de courses et affichage du chemin optimal.',
          technologies: ['Java', 'Algorithmes', 'Gestion'],
          category: 'Java',
          image: '/img/magasin1.png'
        },
        {
          id: 4,
          title: 'Projet PHP',
          description: 'Application web de gestion et classement des étudiants selon leurs résultats académiques.',
          technologies: ['PHP', 'MySQL', 'CRUD'],
          category: 'Web',
          image: '/img/php1.png'
        },
        {
          id: 5,
          title: 'Node.js API',
          description: 'API dédiée à la gestion des cartes Pokémon avec système d\'authentification sécurisé.',
          technologies: ['Node.js', 'Express', 'JWT', 'MongoDB'],
          category: 'Backend',
          image: '/img/node1.png'
        },
        {
          id: 6,
          title: 'Vue.js API',
          description: 'Interface web dynamique pour exploiter l\'API Pokémon.',
          technologies: ['Vue.js', 'API REST', 'Frontend'],
          category: 'Frontend',
          image: '/img/vue1.png'
        },
        {
          id: 7,
          title: 'Flutter API',
          description: 'Application mobile inspirée de Minecraft pour explorer les objets et recettes du jeu.',
          technologies: ['Flutter', 'Dart', 'Mobile'],
          category: 'Mobile',
          image: '/img/Flutter.png'
        },
        {
          id: 8,
          title: 'Socket Projet',
          description: 'Jeu du Morpion en réseau avec gestion des spectateurs et des multiples parties.',
          technologies: ['Socket.io', 'Node.js', 'Temps réel'],
          category: 'Web',
          image: '/img/morpion.png'
        },
        {
          id: 9,
          title: 'ERP',
          description: 'Application de gestion d\'entreprise pour organiser commandes, produits et employés.',
          technologies: ['Full-stack', 'Base de données', 'Gestion'],
          category: 'Web',
          image: '/img/erp1.png'
        }
      ]
    }
  },
  computed: {
    filteredProjects() {
      if (this.selectedFilter === 'Tous') {
        return this.projects
      }
      return this.projects.filter(project => project.category === this.selectedFilter)
    }
  },
  methods: {
    getProjectCount(category) {
      return this.projects.filter(project => project.category === category).length
    }
  }
}
</script>

<style scoped>
.project-card {
  transition: all 0.3s ease;
  border: none;
}
.project-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 12px 24px rgba(0,0,0,0.15) !important;
}
.card-title {
  font-weight: 600;
  font-size: 1.1rem;
}
.badge {
  font-size: 0.75rem;
  font-weight: 500;
}

/* Filtres */
.filters-container {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  align-items: center;
}

.filter-btn {
  padding: 8px 20px;
  border: 2px solid #007bff;
  background-color: white;
  color: #007bff;
  border-radius: 25px;
  font-weight: 500;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;
  outline: none;
}

.filter-btn:hover {
  background-color: #007bff;
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 123, 255, 0.3);
}

.filter-btn.active {
  background-color: #007bff;
  color: white;
  box-shadow: 0 4px 12px rgba(0, 123, 255, 0.4);
}

@media (max-width: 768px) {
  .filter-btn {
    font-size: 0.85rem;
    padding: 6px 16px;
  }
}
</style>
