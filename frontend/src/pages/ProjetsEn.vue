<template>
  <section class="projects-section py-5">
    <div class="container">
      <h2 class="text-center mb-5">My Projects</h2>

      <div class="row">
        <div class="col-md-6 col-lg-4 mb-4" v-for="project in projects" :key="project.id">
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
    </div>
  </section>
</template>

<script>
export default {
  name: 'ProjetsEn',
  data() {
    return {
      projects: [
        {
          id: 1,
          title: 'NodeBuster',
          description: 'Java project applying object-oriented programming principles and data management.',
          technologies: ['Java', 'OOP', 'Data Management'],
          image: '/img/nodeBuster1.png'
        },
        {
          id: 2,
          title: 'Astro-Photography',
          description: 'Pair project using Astroquery library to retrieve and display astronomical data.',
          technologies: ['Python', 'Astroquery', 'Visualization'],
          image: '/img/Astro1.png'
        },
        {
          id: 3,
          title: 'Store Connect',
          description: 'Inventory management, shopping list creation and optimal path display.',
          technologies: ['Java', 'Algorithms', 'Management'],
          image: '/img/magasin1.png'
        },
        {
          id: 4,
          title: 'PHP Project',
          description: 'Web application for managing and ranking students based on their academic results.',
          technologies: ['PHP', 'MySQL', 'CRUD'],
          image: '/img/php1.png'
        },
        {
          id: 5,
          title: 'Node.js API',
          description: 'API dedicated to managing Pokémon cards with secure authentication system.',
          technologies: ['Node.js', 'Express', 'JWT', 'MongoDB'],
          image: '/img/node1.png'
        },
        {
          id: 6,
          title: 'Vue.js API',
          description: 'Dynamic web interface to interact with the Pokémon API.',
          technologies: ['Vue.js', 'REST API', 'Frontend'],
          image: '/img/vue1.png'
        },
        {
          id: 7,
          title: 'Flutter API',
          description: 'Mobile application inspired by Minecraft to explore game objects and recipes.',
          technologies: ['Flutter', 'Dart', 'Mobile'],
          image: '/img/Flutter.png'
        },
        {
          id: 8,
          title: 'Socket Project',
          description: 'Network Tic-tac-toe game with spectator and multiple game management.',
          technologies: ['Socket.io', 'Node.js', 'Real-time'],
          image: '/img/morpion.png'
        },
        {
          id: 9,
          title: 'ERP',
          description: 'Enterprise management application to organize orders, products and employees.',
          technologies: ['Full-stack', 'Database', 'Management'],
          image: '/img/erp1.png'
        }
      ]
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
</style>
