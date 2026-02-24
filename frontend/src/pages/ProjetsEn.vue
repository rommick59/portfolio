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
              <div class="image-wrapper position-relative mb-3">
                <img 
                  v-if="project.images && project.images.length"
                  :src="getCurrentImage(project)"
                  class="card-img-top"
                  :alt="project.title"
                  style="height: 200px; object-fit: cover;"
                >
                <button 
                  v-if="hasMultipleImages(project)"
                  class="nav-btn nav-btn-left"
                  @click="prevImage(project)"
                >
                  <img src="/img/fleche_gauche.png" alt="Previous" class="nav-icon">
                </button>
                <button 
                  v-if="hasMultipleImages(project)"
                  class="nav-btn nav-btn-right"
                  @click="nextImage(project)"
                >
                  <img src="/img/fleche_droite.png" alt="Next" class="nav-icon">
                </button>
                <div v-if="hasMultipleImages(project)" class="dots-wrapper">
                  <span 
                    v-for="(img, idx) in project.images"
                    :key="idx"
                    :class="['dot', { active: currentImageIndex[project.id] === idx }]"
                  ></span>
                </div>
              </div>
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
      categories: ['Web', 'Mobile', 'Backend', 'Frontend', 'Java', 'Python', 'C', 'C++', 'Pterodactyl'],
      projects: [
        {
          id: 1,
          title: 'NodeBuster',
          description: 'Java project applying object-oriented programming principles and data management.',
          technologies: ['Java', 'OOP', 'Data Management'],
          category: 'Java',
          images: ['/img/nodeBuster1.png', '/img/nodeBuster2.png', '/img/nodeBuster3.png'],
          link: 'https://github.com/rommick59/NodeBuster'
        },
        {
          id: 2,
          title: 'Astro-Photography',
          description: 'Pair project using Astroquery library to retrieve and display astronomical data.',
          technologies: ['Python', 'Astroquery', 'Visualization'],
          category: 'Python',
          images: ['/img/Astro1.png', '/img/Astro2.png', '/img/Astro3.png'],
          link: 'https://github.com/keylian15/astro'
        },
        {
          id: 3,
          title: 'Store Connect',
          description: 'Inventory management, shopping list creation and optimal path display.',
          technologies: ['Python', 'Algorithms', 'Management'],
          category: 'Python',
          images: ['/img/magasin1.png', '/img/magasin2.png', '/img/magasin3.png'],
          link: 'https://github.com/roro627/magasin_path_optimizer'
        },
        {
          id: 4,
          title: 'PHP Project',
          description: 'Web application for managing and ranking students based on their academic results.',
          technologies: ['PHP', 'MySQL', 'CRUD'],
          category: 'Web',
          images: ['/img/php1.png', '/img/php2.png', '/img/php3.png'],
          link: 'https://github.com/rommick59/PHP'
        },
        {
          id: 5,
          title: 'Node.js API',
          description: 'API dedicated to managing Pokémon cards with secure authentication system.',
          technologies: ['Node.js', 'Express', 'JWT', 'MongoDB'],
          category: 'Backend',
          images: ['/img/node1.png', '/img/node2.png', '/img/node3.png'],
          link: 'https://github.com/rommick59/pokemon-tcg-spa-rommick59-main'
        },
        {
          id: 6,
          title: 'Vue.js API',
          description: 'Dynamic web interface to interact with the Pokémon API.',
          technologies: ['Vue.js', 'REST API', 'Frontend'],
          category: 'Frontend',
          images: ['/img/vue1.png', '/img/vue2.png', '/img/vue3.png'],
          link: 'https://github.com/rommick59/pokemon-api-rommick59-main'
        },
        {
          id: 7,
          title: 'Flutter API',
          description: 'Mobile application inspired by Minecraft to explore game objects and recipes.',
          technologies: ['Flutter', 'Dart', 'Mobile'],
          category: 'Mobile',
          images: ['/img/Flutter.png'],
          link: 'https://github.com/rommick59/front_erp'
        },
        {
          id: 8,
          title: 'Socket Project',
          description: 'Network Tic-tac-toe game with spectator and multiple game management.',
          technologies: ['Socket', 'C', 'Real-time'],
          category: 'C',
          images: ['/img/morpion1.png', '/img/morpion2.png'],
          link: 'https://github.com/keylian15/Tic-Tac-Toe-Network'
        },
        {
          id: 9,
          title: 'ERP',
          description: 'Enterprise management application to organize orders, products and employees.',
          technologies: ['Full-stack', 'Database', 'Management'],
          category: 'Web',
          images: ['/img/erp1.png' , '/img/erp2.png', '/img/erp3.png'],
          link: 'https://github.com/rommick59/ERP'
        },
        {
          id: 10,
          title: 'Basket Predictor (Front)',
          description: 'Frontend interface to input player stats and get a predicted score from the API.',
          technologies: ['Vue.js', 'Fetch', 'Frontend'],
          category: 'Frontend',
          images: ['/img/Basket.jpg'],
          link: 'https://github.com/rommick59/WEB_Basket-main'
        },
        {
          id: 11,
          title: 'Basket Predictor API',
          description: 'Serverless API that returns a predicted player score from given stats.',
          technologies: ['Node.js', 'Serverless'],
          category: 'Backend',
          images: ['/img/Basket_API.png'],
          link: 'https://github.com/rommick59/API_Basket'
        },
        {
          id: 12,
          title: 'Pterodactyl Hosting Project',
          description: 'Research and recommendations for hosting game servers with Pterodactyl (no GitHub button).',
          technologies: ['DevOps', 'Hosting', 'Pterodactyl'],
          category: 'Pterodactyl',
          images: ['/img/ptero1.png', '/img/ptero2.png'],
        },
        {
          id: 13,
          title: 'Game of Life',
          description: 'Implementation of Conway\'s famous cellular automaton in Java, with a simple graphical interface.',
          technologies: ['C++', 'Graphical Interface'],
          category: 'C++',
          images: ['/img/JeuVie1.png', '/img/JeuVie2.png'],
          link: 'https://github.com/rommick59/Jeu-de-la-Vie'
        },
        {
          id: 14,
          title: 'Bridge Solver Online (Freebridge)',
          description: 'Maintenance and enhancements during the Freebridge internship: codebase analysis, fixes, and UX improvements.',
          technologies: ['Web', 'Maintenance', 'Refactor'],
          category: 'Web',
          images: [],
          link: 'https://github.com/lorenzovdkn/freebridge'
        }
      ],
      currentImageIndex: {}
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
    },
    initIndexes() {
      const map = {}
      this.projects.forEach(project => {
        map[project.id] = 0
      })
      this.currentImageIndex = map
    },
    hasMultipleImages(project) {
      return project.images && project.images.length > 1
    },
    getCurrentImage(project) {
      const idx = this.currentImageIndex[project.id] || 0
      return project.images?.[idx] || ''
    },
    nextImage(project) {
      if (!project.images || !project.images.length) return
      const total = project.images.length
      const current = this.currentImageIndex[project.id] || 0
      const next = (current + 1) % total
      this.currentImageIndex = { ...this.currentImageIndex, [project.id]: next }
    },
    prevImage(project) {
      if (!project.images || !project.images.length) return
      const total = project.images.length
      const current = this.currentImageIndex[project.id] || 0
      const prev = (current - 1 + total) % total
      this.currentImageIndex = { ...this.currentImageIndex, [project.id]: prev }
    }
  },
  created() {
    this.initIndexes()
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

.image-wrapper {
  overflow: hidden;
  border-radius: 10px;
}

.nav-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  border: none;
  color: #fff;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 0.2s ease;
}

.nav-icon {
  width: 18px;
  height: 18px;
}

.nav-btn:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

.nav-btn:hover:not(:disabled) {
  background: rgba(34, 211, 238, 0.85);
}

.nav-btn-left {
  left: 10px;
}

.nav-btn-right {
  right: 10px;
}

.dots-wrapper {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 6px;
}

.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.55);
  transition: all 0.2s ease;
}

.dot.active {
  background: rgba(34, 211, 238, 0.95);
  transform: scale(1.1);
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
