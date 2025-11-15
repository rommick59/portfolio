<template>
  <section class="projects-section py-5">
    <div class="container">
      <h2 class="text-center mb-5">My Projects</h2>

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
  name: 'ProjetsEn',
  data() {
    return {
      projects: [
        {
          id: 1,
          title: 'NodeBuster',
          description: 'NodeBuster is a project developed in Java, where I applied object-oriented programming principles and data management. (C1-Develop, C4-Lead, C6-Collaborate)',
          technologies: ['Java', 'OOP', 'Data Management']
        },
        {
          id: 2,
          title: 'Astro-Photography',
          description: 'Astro-Photography is a project carried out in pairs, where I used the Astroquery library to retrieve and display astronomical data. (C1-Develop, C2-Optimize, C4-Lead, C6-Collaborate)',
          technologies: ['Python', 'Astroquery', 'Data Visualization']
        },
        {
          id: 3,
          title: 'Store Connect',
          description: 'Store Connect allows managing a store\'s inventory, creating a shopping list, and displaying the optimal path. (C1-Develop, C2-Optimize, C4-Lead, C6-Collaborate)',
          technologies: ['Java', 'Algorithms', 'Inventory Management']
        },
        {
          id: 4,
          title: 'PHP Project',
          description: 'Web application for managing and ranking students based on their academic results. (C1-Develop, C2-Optimize, C3-Administer, C4-Lead)',
          technologies: ['PHP', 'MySQL', 'CRUD']
        },
        {
          id: 5,
          title: 'Node.js API',
          description: 'API dedicated to managing Pokémon cards with a secure authentication system. (C1-Develop, C2-Optimize, C4-Lead)',
          technologies: ['Node.js', 'Express', 'JWT', 'MongoDB']
        },
        {
          id: 6,
          title: 'Vue.js API',
          description: 'Dynamic web interface to interact with the Pokémon API. (C1-Develop, C2-Optimize, C4-Lead, C5-Manage)',
          technologies: ['Vue.js', 'REST API', 'Frontend']
        },
        {
          id: 7,
          title: 'Flutter API',
          description: 'Mobile application inspired by Minecraft to explore game objects and recipes. (C1-Develop, C2-Optimize, C4-Lead, C5-Manage)',
          technologies: ['Flutter', 'Dart', 'Mobile']
        },
        {
          id: 8,
          title: 'Socket Project',
          description: 'Tic-tac-toe network game where two players can compete, with spectator and multiple game management. (C1-Develop, C2-Optimize, C4-Lead)',
          technologies: ['Socket.io', 'Node.js', 'Real-time']
        },
        {
          id: 9,
          title: 'ERP',
          description: 'Enterprise management application to organize orders, products, and employees.',
          technologies: ['Full-stack', 'Database', 'Management']
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
