<template>
  <div class="competences-page">
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

    <section class="neo-section neo-min py-5">
      <div class="container neo-content">
        <h2 class="text-center mb-3 scroll-animate neo-heading">BUT CS Competencies</h2>
        <p class="text-center text-muted scroll-animate mb-5">Self-assessment with linked evidence</p>
        <div class="row g-4 scroll-stagger">
          <div class="col-md-6 col-lg-4" v-for="comp in competences" :key="comp.id">
            <div class="neo-card h-100 p-4 d-flex flex-column">
              <div class="d-flex align-items-center justify-content-between mb-3">
                <div>
                  <small class="text-uppercase text-primary fw-bold">{{ comp.id }}</small>
                  <h5 class="mb-1">{{ comp.title }}</h5>
                </div>
                <span class="badge" :class="levelClass(comp.level)">{{ comp.level }}</span>
              </div>
              <p class="text-muted mb-3">{{ comp.description }}</p>
              <div>
                <h6 class="text-primary mb-2">Evidence</h6>
                <ul class="list-unstyled mb-0">
                  <li v-for="proof in comp.proofs" :key="proof.label" class="mb-2">
                    <template v-if="proof.link">
                      <component
                        :is="isExternal(proof.link) ? 'a' : 'router-link'"
                        :href="isExternal(proof.link) ? proof.link : null"
                        :to="!isExternal(proof.link) ? proof.link : null"
                        :target="isExternal(proof.link) ? '_blank' : null"
                        rel="noopener"
                        class="neo-link"
                      >
                        {{ proof.label }}
                      </component>
                    </template>
                    <template v-else>
                      <span>{{ proof.label }}</span>
                    </template>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
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
      ],
      competences: [
        {
          id: 'C1',
          title: 'Develop an application',
          level: 'Achieved',
          description:
            'Built end-to-end apps, including a Pokémon card API in TypeScript/Express/Prisma with clear routing, database layer, and tests; also delivered Flutter UIs and Python projects.',
          proofs: [
            { label: 'Pokémon REST API (Node.js, Prisma)', link: '/engprojet#project-node-api' },
            { label: 'Flutter application', link: '/engprojet#project-flutter-api' },
            { label: 'Python simulation', link: '/engprojet#project-astro' }
          ]
        },
        {
          id: 'C2',
          title: 'Optimize software',
          level: 'In progress',
          description:
            'Codebase analysis during the Freebridge internship, refactors to clarify responsibilities, and ongoing focus on performance and code quality.',
          proofs: [
            { label: 'Bridge Solver Online analysis (internship)', link: '/engprojet#project-bridge-solver' },
            { label: 'API refactor & hardening', link: '/engprojet#project-basket-api' },
            { label: 'Debugging and fixes', link: '/engprojet#project-basket-front' }
          ]
        },
        {
          id: 'C6',
          title: 'Collaborate in a software team',
          level: 'Achieved',
          description:
            'Group projects with Git/GitHub workflows and professional collaboration during the Freebridge internship, with regular reporting and stakeholder alignment.',
          proofs: [
            { label: 'University group projects', link: '/engprojet#project-erp' },
            { label: 'Git and GitHub usage', link: 'https://github.com/rommick59' },
            { label: 'Freebridge internship', link: '/engprojet#project-bridge-solver' },
            { label: 'AOSM Basket civic service', link: null }
          ]
        }
      ]
    }
  },
  methods: {
    levelClass(level) {
      if (!level) return 'bg-secondary'
      const lower = level.toLowerCase()
      return lower.includes('progress') || lower.includes('cours') ? 'bg-warning text-dark' : 'bg-success'
    },
    isExternal(link) {
      return /^https?:\/\//i.test(link)
    }
  }
}
</script>

<style scoped>
/* Intentionnellement vide : styles globaux neo-* dans src/style.css */
</style>
