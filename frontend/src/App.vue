<template>
  <div id="app">
    <HeaderNav :lang="currentLang" />
    <div v-if="appError" class="alert alert-danger m-3" role="alert">
      <strong>App error:</strong>
      <pre style="white-space: pre-wrap; font-size: 0.85rem;">{{ appError }}</pre>
      <p class="mb-0">Open the browser console (F12) for more details.</p>
    </div>
    <router-view v-else></router-view>
    <FooterComp />
  </div>
</template>

<script>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import HeaderNav from './components/HeaderNav.vue'
import FooterComp from './components/FooterComp.vue'

export default {
  components: {
    HeaderNav,
    FooterComp
  },
  setup() {
    const route = useRoute()
    const currentLang = computed(() => route.meta.lang || 'fr')
    // reactive app error display (poll window.__APP_ERROR__)
    const { ref, onMounted, onBeforeUnmount } = require('vue')
    const appError = ref(null)
    let timer = null
    onMounted(() => {
      timer = setInterval(() => {
        if (window && window.__APP_ERROR__) {
          appError.value = window.__APP_ERROR__
        }
      }, 300)
    })
    onBeforeUnmount(() => {
      if (timer) clearInterval(timer)
    })

    return { currentLang, appError }
  }
}
</script>
