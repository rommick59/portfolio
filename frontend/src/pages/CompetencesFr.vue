<template>
  <section class="bg-light py-5">
    <div class="container">
      <h2 class="text-center mb-5 scroll-animate">Langages & Technologies</h2>
      <div class="row scroll-stagger justify-content-center">
        <div class="col-6 col-sm-4 col-md-3 col-lg-2 mb-4" v-for="tech in technologies" :key="tech.id">
          <div class="tech-card text-center p-3">
            <div class="tech-logo-container mb-2">
              <img :src="tech.logo" :alt="tech.name" class="tech-logo" />
            </div>
            <h6 class="tech-name">{{ tech.name }}</h6>
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
.tech-card {
  background: white;
  border-radius: 10px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
}

.tech-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.tech-logo-container {
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.tech-logo {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

.tech-name {
  font-size: 0.9rem;
  font-weight: 600;
  margin: 0;
  color: #333;
}

@media (max-width: 768px) {
  .tech-logo-container {
    width: 60px;
    height: 60px;
  }
  
  .tech-name {
    font-size: 0.8rem;
  }
}
</style>
