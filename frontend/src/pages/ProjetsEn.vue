<template>
  <section class="neo-section neo-min projects-section py-5">
    <div class="container neo-content">
      <h2 class="text-center mb-4 scroll-animate neo-heading">My Projects</h2>
      
      <!-- Filters -->
      <div class="filters-container text-center mb-5 scroll-animate">
        <button 
          @click="selectedFilter = 'All'"
          :class="['filter-btn', { active: selectedFilter === 'All' }]"
        >
          All ({{ projects.length }})
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

      <!-- Filtered projects -->
      <div class="row scroll-stagger">
        <div 
          class="col-md-6 col-lg-4 mb-4" 
          v-for="project in filteredProjects" 
          :key="project.id"
        >
            <div class="card neo-card project-card h-100">
              <img v-if="project.image" :src="project.image" class="card-img-top" :alt="project.title" style="height: 200px; object-fit: cover;">
              <div class="card-body d-flex flex-column">
                <h5 class="card-title text-primary">{{ project.title }}</h5>
                <p class="card-text flex-grow-1">{{ project.description }}</p>
                <div class="mt-2">
                  <span v-for="(tech, idx) in project.technologies" :key="idx" class="badge bg-secondary me-1 mb-1">{{ tech }}</span>
                </div>
                <div class="mt-3" v-if="project.link">
                  <a :href="project.link" target="_blank" class="btn btn-outline-primary btn-sm w-100">
                    <i class="bi bi-box-arrow-up-right me-1"></i>View Project
                  </a>
                </div>
              </div>
            </div>
          </div>
      </div>

      <!-- No projects message -->
      <div v-if="filteredProjects.length === 0" class="text-center py-5">
        <p class="text-muted">No projects found for this category.</p>
      </div>
    </div>
  </section>
</template>

<script>
import { useScrollAnimation } from '../composables/useScrollAnimation'

export default {
  name: 'ProjetsEn',
  setup() {
    useScrollAnimation()
  },
  data() {
    return {
      selectedFilter: 'All',
      categories: ['Web', 'Mobile', 'Backend', 'Frontend', 'Java', 'Python'],
      projects: [
        {
          id: 1,
          title: 'NodeBuster',
          description: 'Java project applying object-oriented programming principles and data management.',
          technologies: ['Java', 'OOP', 'Data Management'],
          category: 'Java',
          image: '/img/nodeBuster1.png',
          link: 'https://github.com/rommick59/NodeBuster'
        },
        {
          id: 2,
          title: 'Astro-Photography',
          description: 'Pair project using Astroquery library to retrieve and display astronomical data.',
          technologies: ['Python', 'Astroquery', 'Visualization'],
          category: 'Python',
          image: '/img/Astro1.png',
          link: 'https://github.com/keylian15/astro'
        },
        {
          id: 3,
          title: 'Store Connect',
          description: 'Inventory management, shopping list creation and optimal path display.',
          technologies: ['Java', 'Algorithms', 'Management'],
          category: 'Java',
          image: '/img/magasin1.png',
          link: 'https://github.com/rommick59/StoreConnect'
        },
        {
          id: 4,
          title: 'PHP Project',
          description: 'Web application for managing and ranking students based on their academic results.',
          technologies: ['PHP', 'MySQL', 'CRUD'],
          category: 'Web',
          image: '/img/php1.png',
          link: 'https://github.com/rommick59/PHP'
        },
        {
          id: 5,
          title: 'Node.js API',
          description: 'API dedicated to managing Pokémon cards with secure authentication system.',
          technologies: ['Node.js', 'Express', 'JWT', 'MongoDB'],
          category: 'Backend',
          image: '/img/node1.png',
          link: 'https://github.com/rommick59/pokemon-tcg-spa-rommick59-main'
        },
        {
          id: 6,
          title: 'Vue.js API',
          description: 'Dynamic web interface to interact with the Pokémon API.',
          technologies: ['Vue.js', 'REST API', 'Frontend'],
          category: 'Frontend',
          image: '/img/vue1.png',
          link: 'https://github.com/rommick59/pokemon-api-rommick59-main'
        },
        {
          id: 7,
          title: 'Flutter API',
          description: 'Mobile application inspired by Minecraft to explore game objects and recipes.',
          technologies: ['Flutter', 'Dart', 'Mobile'],
          category: 'Mobile',
          image: '/img/Flutter.png',
          link: 'https://github.com/rommick59/front_erp'
        },
        {
          id: 8,
          title: 'Socket Project',
          description: 'Network Tic-tac-toe game with spectator and multiple game management.',
          technologies: ['Socket.io', 'Node.js', 'Real-time'],
          category: 'Web',
          image: '/img/morpion.png',
          link: 'https://github.com/keylian15/Tic-Tac-Toe-Network'
        },
        {
          id: 9,
          title: 'ERP',
          description: 'Enterprise management application to organize orders, products and employees.',
          technologies: ['Full-stack', 'Database', 'Management'],
          category: 'Web',
          image: '/img/erp1.png',
          link: 'https://github.com/rommick59/ERP'
        },
        {
          id: 10,
          title: 'Basket Predictor (Front)',
          description: 'Frontend interface to input player stats and get a predicted score from the API.',
          technologies: ['Vue.js', 'Fetch', 'Frontend'],
          category: 'Frontend',
          image: '/img/basket1.png',
          link: 'https://github.com/rommick59/WEB_Basket-main'
        },
        {
          id: 11,
          title: 'Basket Predictor API',
          description: 'Serverless API that returns a predicted player score from given stats.',
          technologies: ['Node.js', 'Serverless'],
          category: 'Backend',
          image: '/img/api.png',
          link: 'https://github.com/rommick59/API_Basket'
        },
        {
          id: 12,
          title: 'Pterodactyl Hosting Project',
          description: 'Research and recommendations for hosting game servers with Pterodactyl (no GitHub button).',
          technologies: ['DevOps', 'Hosting', 'Pterodactyl'],
          category: 'Web',
          image: '/img/pterodactyl.png',
        }
      ]
    }
  },
  computed: {
    filteredProjects() {
      if (this.selectedFilter === 'All') {
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
}
.project-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 14px 40px rgba(0,0,0,0.32) !important;
}
.card-title {
  font-weight: 600;
  font-size: 1.1rem;
}
.badge {
  font-size: 0.75rem;
  font-weight: 500;
}

/* Filters */
.filters-container {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  align-items: center;
}

.filter-btn {
  padding: 8px 20px;
  border: 1px solid rgba(34, 211, 238, 0.45);
  background-color: rgba(15, 23, 42, 0.65);
  color: #e2e8f0;
  border-radius: 25px;
  font-weight: 500;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;
  outline: none;
}

.filter-btn:hover {
  background-color: rgba(34, 211, 238, 0.15);
  border-color: rgba(34, 211, 238, 0.75);
  color: #ffffff;
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.25);
}

.filter-btn.active {
  background-color: rgba(34, 211, 238, 0.22);
  color: #ffffff;
  border-color: rgba(34, 211, 238, 0.85);
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.28);
}

@media (max-width: 768px) {
  .filter-btn {
    font-size: 0.85rem;
    padding: 6px 16px;
  }
}
</style>
