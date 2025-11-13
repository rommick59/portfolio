import { createApp } from 'vue'
import App from './App.vue'
import AOS from 'aos'
import 'aos/dist/aos.css'
import 'animate.css'

const app = createApp(App)
app.mount('#app')

// Initialize AOS (Animate On Scroll)
document.addEventListener('DOMContentLoaded', () => {
	AOS.init({ once: true, duration: 700 })
})
