<template>
  <div id="app">
    <HeaderNav :lang="currentLang" />
    <router-view></router-view>
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
    
    return { currentLang }
  }
}
</script>
