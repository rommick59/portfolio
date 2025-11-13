<template>
  <div class="min-vh-100 bg-light">
    <nav class="py-3 bg-dark text-white">
      <div class="container d-flex justify-content-between align-items-center">
        <h5 class="mb-0">Node + Vue + Prisma</h5>
        <small class="text-muted">Demo</small>
      </div>
    </nav>

    <main class="container py-5">
      <header class="mb-4 text-center" data-aos="fade-down">
        <h1 class="fw-bold animate__animated animate__fadeInDown">Node + Vue + Prisma</h1>
        <p class="text-muted">Exemple minimal fullstack — backend Express/Prisma et frontend Vue 3</p>
      </header>

      <div class="row gx-4 gy-4">
        <div class="col-lg-7" data-aos="fade-up">
          <HelloWorld />
        </div>
        <div class="col-lg-5" data-aos="fade-up" data-aos-delay="150">
          <Contact />
        </div>
      </div>
    </main>

    <footer class="py-4 bg-white border-top text-center">
      <div class="container text-muted">© Votre projet — test local</div>
    </footer>
  </div>
</template>

<script setup>
import HelloWorld from './components/HelloWorld.vue'
import Contact from './components/Contact.vue'
</script>
