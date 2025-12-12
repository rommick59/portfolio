import { onMounted, onUnmounted } from 'vue'

export function useScrollAnimation() {
  let observer = null

  const initScrollAnimation = () => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    }

    observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          // Optionnel : arrêter d'observer après l'animation
          // observer.unobserve(entry.target)
        }
      })
    }, options)

    // Observer tous les éléments avec la classe 'scroll-animate'
    const elements = document.querySelectorAll('.scroll-animate')
    elements.forEach(el => observer.observe(el))

    // Observer les éléments avec animation échelonnée
    const staggerElements = document.querySelectorAll('.scroll-stagger')
    staggerElements.forEach(el => observer.observe(el))
  }

  onMounted(() => {
    // Petit délai pour s'assurer que le DOM est prêt
    setTimeout(initScrollAnimation, 100)
  })

  onUnmounted(() => {
    if (observer) {
      observer.disconnect()
    }
  })

  return {
    initScrollAnimation
  }
}
