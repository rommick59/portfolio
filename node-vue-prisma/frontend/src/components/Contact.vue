<template>
  <div class="contact">
    <h2>Contact</h2>
    <form @submit.prevent="submit">
      <div>
        <input v-model="name" placeholder="Nom" />
      </div>
      <div>
        <input v-model="email" placeholder="Email" />
      </div>
      <div>
        <textarea v-model="message" placeholder="Message"></textarea>
      </div>
      <div>
        <button type="submit">Envoyer</button>
      </div>
    </form>

    <p v-if="status" :class="statusClass + ' animate__animated animate__fadeIn'">{{ status }}</p>
    <p v-if="previewUrl" class="mt-2"><a :href="previewUrl" target="_blank">Prévisualiser l'email (dev)</a></p>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import axios from 'axios'

const name = ref('')
const email = ref('')
const message = ref('')
const status = ref('')

const statusClass = computed(() => status.value && status.value.includes('Erreur') ? 'error' : 'success')

const previewUrl = ref('')

const submit = async () => {
  status.value = ''
  try {
    const res = await axios.post('http://localhost:4000/contact', {
      name: name.value,
      email: email.value,
      message: message.value,
    })
    if (res.data && res.data.ok) {
      status.value = 'Message envoyé avec succès.'
      if (res.data.previewUrl) previewUrl.value = res.data.previewUrl
      name.value = ''
      email.value = ''
      message.value = ''
    } else {
      status.value = 'Erreur: réponse inattendue du serveur.'
    }
  } catch (err) {
    console.error(err)
    status.value = 'Erreur lors de l envoi du message.'
  }
}
</script>

<style scoped>
.contact input, .contact textarea { width: 100%; margin-bottom: 8px; padding: 8px }
.success { color: green }
.error { color: red }
</style>
