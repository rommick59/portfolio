<template>
  <section class="projects-section py-5">
    <div class="container">
      <h2 class="text-center mb-5">My Projects</h2>

      <div class="row">
        <div class="col-md-6 mb-4" v-for="project in projects" :key="project.id" data-aos="fade-up">
          <div class="card project-card h-100">
            <div v-if="project.images && project.images.length > 0" class="card-img-top">
              <div :id="'carousel-' + project.id" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                  <div v-for="(img, idx) in project.images" :key="idx" class="carousel-item" :class="{ active: idx === 0 }">
                    <img :src="img" class="d-block w-100" :alt="project.title" style="height: 250px; object-fit: cover;">
                  </div>
                </div>
                <button class="carousel-control-prev" type="button" :data-bs-target="'#carousel-' + project.id" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" :data-bs-target="'#carousel-' + project.id" data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
            </div>
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
          technologies: ['Java', 'OOP', 'Data Management'],
          images: ['/img/nodeBuster1.png', '/img/nodeBuster2.png', '/img/nodeBuster3.png']
        },
        {
          id: 2,
          title: 'Astro-Photography',
          description: 'Astro-Photography is a project carried out in pairs, where I used the Astroquery library to retrieve and display astronomical data. (C1-Develop, C2-Optimize, C4-Lead, C6-Collaborate)',
          technologies: ['Python', 'Astroquery', 'Data Visualization'],
          images: ['/img/Astro1.png', '/img/Astro2.png', '/img/Astro3.png']
        },
        {
          id: 3,
          title: 'Store Connect',
          description: 'Store Connect allows managing a store\'s inventory, creating a shopping list, and displaying the optimal path. (C1-Develop, C2-Optimize, C4-Lead, C6-Collaborate)',
          technologies: ['Java', 'Algorithms', 'Inventory Management'],
          images: ['/img/magasin1.png', '/img/magasin2.png', '/img/magasin3.png']
        },
        {
          id: 4,
          title: 'PHP Project',
          description: 'Web application for managing and ranking students based on their academic results. (C1-Develop, C2-Optimize, C3-Administer, C4-Lead)',
          technologies: ['PHP', 'MySQL', 'CRUD'],
          images: ['/img/php1.png', '/img/php2.png', '/img/php3.png']
        },
        {
          id: 5,
          title: 'Node.js API',
          description: 'API dedicated to managing Pokémon cards with a secure authentication system. (C1-Develop, C2-Optimize, C4-Lead)',
          technologies: ['Node.js', 'Express', 'JWT', 'MongoDB'],
          images: ['/img/node1.png', '/img/node2.png', '/img/node3.png']
        },
        {
          id: 6,
          title: 'Vue.js API',
          description: 'Dynamic web interface to interact with the Pokémon API. (C1-Develop, C2-Optimize, C4-Lead, C5-Manage)',
          technologies: ['Vue.js', 'REST API', 'Frontend'],
          images: ['/img/vue1.png', '/img/vue2.png', '/img/vue3.png']
        },
        {
          id: 7,
          title: 'Flutter API',
          description: 'Mobile application inspired by Minecraft to explore game objects and recipes. (C1-Develop, C2-Optimize, C4-Lead, C5-Manage)',
          technologies: ['Flutter', 'Dart', 'Mobile'],
          images: ['/img/Flutter.png']
        },
        {
          id: 8,
          title: 'Socket Project',
          description: 'Tic-tac-toe network game where two players can compete, with spectator and multiple game management. (C1-Develop, C2-Optimize, C4-Lead)',
          technologies: ['Socket.io', 'Node.js', 'Real-time'],
          images: ['/img/morpion.png', '/img/morpion1.png', '/img/morpion2.png']
        },
        {
          id: 9,
          title: 'ERP',
          description: 'Enterprise management application to organize orders, products, and employees.',
          technologies: ['Full-stack', 'Database', 'Management'],
          images: ['/img/erp1.png', '/img/erp2.png', '/img/erp3.png']
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
