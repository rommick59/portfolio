import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './style.css'

// Import des composants de pages
import AccueilFr from './pages/AccueilFr.vue'
import CompetencesFr from './pages/CompetencesFr.vue'
import ProjetsFr from './pages/ProjetsFr.vue'
import ContactFr from './pages/ContactFr.vue'
import AccueilEn from './pages/AccueilEn.vue'
import CompetencesEn from './pages/CompetencesEn.vue'
import ProjetsEn from './pages/ProjetsEn.vue'
import ContactEn from './pages/ContactEn.vue'

const routes = [
  { path: '/', redirect: '/accueil' },
  { path: '/accueil', component: AccueilFr, meta: { lang: 'fr' } },
  { path: '/competences', component: CompetencesFr, meta: { lang: 'fr' } },
  { path: '/projets', component: ProjetsFr, meta: { lang: 'fr' } },
  { path: '/contact', component: ContactFr, meta: { lang: 'fr' } },
  { path: '/engindex', component: AccueilEn, meta: { lang: 'en' } },
  { path: '/engcompetences', component: CompetencesEn, meta: { lang: 'en' } },
  { path: '/engprojet', component: ProjetsEn, meta: { lang: 'en' } },
  { path: '/engcontact', component: ContactEn, meta: { lang: 'en' } }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

const app = createApp(App)
app.use(router)
app.mount('#app')

// Initialiser AOS après le montage
setTimeout(() => {
  if (window.AOS) {
    window.AOS.init()
  }
}, 100)
