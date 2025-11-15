<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark py-3">
    <div class="container">
      <router-link to="/accueil" class="navbar-brand fw-bold">Romain SIAME</router-link>
      
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span class="navbar-toggler-icon"></span>
      </button>
      
      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul class="navbar-nav" v-if="lang === 'fr'">
          <li class="nav-item"><router-link to="/accueil" class="nav-link">Accueil</router-link></li>
          <li class="nav-item"><router-link to="/competences" class="nav-link">Compétences</router-link></li>
          <li class="nav-item"><router-link to="/projets" class="nav-link">Projets</router-link></li>
          <li class="nav-item"><router-link to="/contact" class="nav-link">Contact</router-link></li>
          <li class="nav-item"><router-link to="/engindex" class="nav-link">🇬🇧</router-link></li>
        </ul>
        <ul class="navbar-nav" v-else>
          <li class="nav-item"><router-link to="/engindex" class="nav-link">Welcome</router-link></li>
          <li class="nav-item"><router-link to="/engcompetences" class="nav-link">Skills</router-link></li>
          <li class="nav-item"><router-link to="/engprojet" class="nav-link">Projects</router-link></li>
          <li class="nav-item"><router-link to="/engcontact" class="nav-link">Contact</router-link></li>
          <li class="nav-item"><router-link to="/accueil" class="nav-link">🇫🇷</router-link></li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  props: {
    lang: {
      type: String,
      default: 'fr'
    }
  }
}
</script>

<style scoped>
.navbar-nav .nav-link {
  color: white !important;
  text-decoration: none !important;
  margin: 0 15px;
  font-weight: 500;
  transition: color 0.3s ease;
}

.navbar-nav .nav-link:hover {
  color: #ccc !important;
}

@media (min-width: 992px) {
  .navbar-nav {
    display: flex;
    justify-content: flex-end;
  }
  .navbar-nav .nav-item {
    margin-left: 20px;
  }
}
</style>
