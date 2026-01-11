<template>
  <section class="neo-section neo-min py-5">
    <div class="container neo-content">
      <h2 class="text-center mb-5 scroll-animate neo-heading">Languages & Technologies</h2>
      <div class="row scroll-stagger justify-content-center">
        <div class="col-6 col-sm-4 col-md-3 col-lg-2 mb-4" v-for="tech in technologies" :key="tech.id">
          <div class="neo-tech-card text-center p-3">
            <div class="neo-tech-logo-container mb-3 mx-auto">
              <img :src="tech.logo" :alt="tech.name" class="neo-tech-logo" />
            </div>
            <h6 class="neo-tech-name">{{ tech.name }}</h6>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { useScrollAnimation } from '../composables/useScrollAnimation'

export default {
  name: 'CompetencesEn',
  setup() {
    useScrollAnimation()
  },
  data() {
    return {
      technologies: [
        {
          id: 1,
          name: 'Vue.js',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg'
        },
        {
          id: 2,
          name: 'Node.js',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'
        },
        {
          id: 3,
          name: 'Python',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg'
        },
        {
          id: 4,
          name: 'PHP',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg'
        },
        {
          id: 5,
          name: 'Symfony',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/symfony/symfony-original.svg'
        },
        {
          id: 6,
          name: 'Kubernetes',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg'
        },
        {
          id: 7,
          name: 'Docker',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg'
        },
        {
          id: 8,
          name: 'SQL',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg'
        },
        {
          id: 9,
          name: 'NoSQL',
          logo: '/img/tech-logos/Nosql.png'
        },
        {
          id: 10,
          name: 'Java',
          logo: '/img/tech-logos/Java.png'
        },
        {
          id: 11,
          name: 'C',
          logo: '/img/tech-logos/C.png'
        },
        {
          id: 12,
          name: 'C++',
          logo: '/img/tech-logos/C++.png'
        },
        {
          id: 13,
          name: 'Flutter',
          logo: '/img/tech-logos/Flutter.png'
        },
        {
          id: 14,
          name: 'Dart',
          logo: '/img/tech-logos/Dart.png'
        },
        {
          id: 15,
          name: 'REST API',
          logo: '/img/tech-logos/APIRest.png'
        }
      ]
    }
  }
}
</script>

<style scoped>
/* Intentionnellement vide : styles globaux neo-* dans src/style.css */
</style>
