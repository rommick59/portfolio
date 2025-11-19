<template>
  <footer class="bg-dark text-white text-center py-4" data-aos="fade-up">
    <p>&copy; {{ currentYear }} Romain SIAME - All rights reserved</p>
    
    <div class="social-icons">
      <a href="https://github.com/rommick59" target="_blank" class="social-icon mx-2">
        <img src="/img/git.png" alt="GitHub" style="width: 40px; height: 40px;">
      </a>
      <a href="https://www.linkedin.com/in/romain-siame-a237382ba" target="_blank" class="social-icon mx-2">
        <img src="/img/link.png" alt="LinkedIn" style="width: 40px; height: 40px;">
      </a>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      currentYear: new Date().getFullYear()
    }
  }
}
</script>

<style scoped>
.social-icons {
  margin-top: 1rem;
}
.social-icon {
  display: inline-block;
  transition: opacity 0.3s;
}
.social-icon:hover {
  opacity: 0.7;
}
</style>
