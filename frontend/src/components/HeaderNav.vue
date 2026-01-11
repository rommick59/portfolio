<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark py-3 neo-nav">
    <div class="container">
      <router-link to="/accueil" class="navbar-brand fw-bold">Romain SIAME</router-link>
      
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span class="navbar-toggler-icon"></span>
      </button>
      
      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul class="navbar-nav" v-if="lang === 'fr'">
          <li class="nav-item"><router-link to="/accueil" class="nav-link" active-class="active">Accueil</router-link></li>
          <li class="nav-item"><router-link to="/competences" class="nav-link" active-class="active">Compétences</router-link></li>
          <li class="nav-item"><router-link to="/projets" class="nav-link" active-class="active">Projets</router-link></li>
          <li class="nav-item"><router-link to="/contact" class="nav-link" active-class="active">Contact</router-link></li>
          <li class="nav-item"><a href="/engindex" class="nav-link">🇬🇧</a></li>
        </ul>
        <ul class="navbar-nav" v-else>
          <li class="nav-item"><router-link to="/engindex" class="nav-link" active-class="active">Welcome</router-link></li>
          <li class="nav-item"><router-link to="/engcompetences" class="nav-link" active-class="active">Skills</router-link></li>
          <li class="nav-item"><router-link to="/engprojet" class="nav-link" active-class="active">Projects</router-link></li>
          <li class="nav-item"><router-link to="/engcontact" class="nav-link" active-class="active">Contact</router-link></li>
          <li class="nav-item"><a href="/accueil" class="nav-link">🇫🇷</a></li>
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
