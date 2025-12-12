<template>
  <section class="bg-light py-5">
    <div class="container">
      <h2 class="text-center mb-5 scroll-animate">💼 Skills</h2>
      <div class="row scroll-stagger">
        <div class="col-md-4 mb-4" v-for="comp in competences" :key="comp.id">
          <div class="card shadow-sm h-100">
            <div class="card-body">
              <h5 class="card-title text-center">{{ comp.title }}</h5>
              <h6 class="card-subtitle mb-3 text-center">{{ comp.subtitle }}</h6>
              <p class="card-text">{{ comp.description }}</p>
            </div>
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
      competences: [
        {
          id: 1,
          title: 'C1 - Develop',
          subtitle: 'Build robust and functional software applications',
          description: 'Design and implementation of applications following best practices. Programming with various languages (Java, Python, JavaScript, etc.).'
        },
        {
          id: 2,
          title: 'C2 - Optimization',
          subtitle: 'Improve code performance and quality',
          description: 'Application of SOLID principles and design patterns. Query optimization and resource management. Refactoring and testing to ensure clean, maintainable code.'
        },
        {
          id: 3,
          title: 'C3 - Administer',
          subtitle: 'Manage infrastructure and application deployment',
          description: 'Database configuration and administration (SQL, MongoDB). Service deployment and management via Docker, Nginx, Wamp, and cloud hosting. Application security and user access management.'
        },
        {
          id: 4,
          title: 'C4 - Manage',
          subtitle: 'Plan and organize IT project development',
          description: 'Project management with tools like Trello, Git. Technical documentation and task tracking. Needs analysis and requirements specification.'
        },
        {
          id: 5,
          title: 'C5 - Lead',
          subtitle: 'Drive a project and coordinate a technical team',
          description: 'Implementation of Agile/Scrum methodologies for efficient management. Progress monitoring and priority management. Communication and coordination among team members.'
        },
        {
          id: 6,
          title: 'C6 - Collaborate',
          subtitle: 'Work effectively in a team and contribute to common projects',
          description: 'Use of Git/GitHub for collaborative work. Participation in code reviews and technical decisions. Effective communication between developers.'
        }
      ]
    }
  }
}
</script>
