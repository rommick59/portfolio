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
import Debug from './pages/Debug.vue'

const routes = [
  { path: '/', redirect: '/accueil' },
  { path: '/accueil', component: AccueilFr, meta: { lang: 'fr' }, name: 'AccueilFr' },
  { path: '/competences', component: CompetencesFr, meta: { lang: 'fr' }, name: 'CompetencesFr' },
  { path: '/projets', component: ProjetsFr, meta: { lang: 'fr' }, name: 'ProjetsFr' },
  { path: '/contact', component: ContactFr, meta: { lang: 'fr' }, name: 'ContactFr' },
  { path: '/engindex', component: AccueilEn, meta: { lang: 'en' }, name: 'AccueilEn' },
  { path: '/engcompetences', component: CompetencesEn, meta: { lang: 'en' }, name: 'CompetencesEn' },
  { path: '/engprojet', component: ProjetsEn, meta: { lang: 'en' }, name: 'ProjetsEn' },
  { path: '/engcontact', component: ContactEn, meta: { lang: 'en' }, name: 'ContactEn' }
  ,{ path: '/debug', component: Debug, meta: { lang: 'fr' }, name: 'Debug' }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

const app = createApp(App)

// global error handler -> expose to window for debugging
app.config.errorHandler = (err, instance, info) => {
  try {
    window.__APP_ERROR__ = (err && err.stack) ? err.stack.toString() : String(err)
  } catch (e) {
    // ignore
  }
  console.error('App error:', err, info)
}

app.use(router)
app.mount('#app')

// Initialiser AOS une seule fois après que l'app soit montée
router.isReady().then(() => {
  setTimeout(() => {
    if (window.AOS) {
      try {
        window.AOS.init({
          duration: 800,
          once: true
        })
      } catch (e) {
        console.warn('AOS init failed', e)
      }
    }
  }, 100)
})
