<template>
  <div class="card shadow-sm">
    <div class="card-body">
      <h5 class="card-title">Utilisateurs</h5>
      <p class="text-muted">Récupère et crée des utilisateurs via l'API backend.</p>

      <form class="row g-2 align-items-end mb-3" @submit.prevent="createUser">
        <div class="col">
          <input v-model="email" type="email" class="form-control" placeholder="email" required />
        </div>
        <div class="col">
          <input v-model="name" class="form-control" placeholder="name" />
        </div>
        <div class="col-auto">
          <button class="btn btn-primary">Créer</button>
        </div>
      </form>

      <ul class="list-group">
        <li v-for="(u, i) in users" :key="u.id" class="list-group-item d-flex justify-content-between align-items-center" :data-aos="'fade-right'" :data-aos-delay="i * 60">
          <div>
            <strong>{{ u.email }}</strong>
            <div class="small text-muted">{{ u.name }}</div>
          </div>
          <span class="badge bg-secondary rounded-pill">#{{ u.id }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const users = ref([])
const email = ref('')
const name = ref('')

const fetchUsers = async () => {
  try {
    const res = await axios.get('http://localhost:4000/users')
    users.value = res.data
  } catch (err) {
    console.error(err)
  }
}

const createUser = async () => {
  try {
    await axios.post('http://localhost:4000/users', { email: email.value, name: name.value })
    email.value = ''
    name.value = ''
    await fetchUsers()
  } catch (err) {
    console.error(err)
  }
}

onMounted(fetchUsers)
</script>
