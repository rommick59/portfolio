<template>
  <section class="contact-section py-5" data-aos="fade-up">
    <div class="container">
      <h2 class="text-center mb-5">📧 Contactez-moi</h2>
      
      <div v-if="successMessage" class="alert alert-success">{{ successMessage }}</div>
      <div v-if="errorMessage" class="alert alert-danger">{{ errorMessage }}</div>
      
      <form @submit.prevent="handleSubmit" id="contactForm">
        <div class="row">
          <div class="col-md-6 mb-4">
            <label for="name" class="form-label">Nom</label>
            <input type="text" class="form-control" id="name" v-model="form.name" required>
          </div>

          <div class="col-md-6 mb-4">
            <label for="email" class="form-label">Email</label>
            <input type="email" class="form-control" id="email" v-model="form.email" required>
          </div>

          <div class="col-md-12 mb-4">
            <label for="message" class="form-label">Message</label>
            <textarea class="form-control" id="message" v-model="form.message" rows="4" required></textarea>
          </div>

          <div class="col-md-12 text-center">
            <button type="submit" class="btn btn-primary" :disabled="isSubmitting">
              {{ isSubmitting ? 'Envoi en cours...' : 'Envoyer' }}
            </button>
          </div>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ContactFr',
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: ''
      },
      isSubmitting: false,
      successMessage: '',
      errorMessage: ''
    }
  },
  methods: {
    async handleSubmit() {
      this.isSubmitting = true
      this.successMessage = ''
      this.errorMessage = ''
      
      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(this.form)
        })
        
        const data = await response.json()
        
        if (response.ok) {
          this.successMessage = 'Message envoyé avec succès !'
          this.form = { name: '', email: '', message: '' }
        } else {
          this.errorMessage = data.error || 'Une erreur est survenue, veuillez réessayer.'
        }
      } catch (error) {
        this.errorMessage = 'Une erreur est survenue, veuillez réessayer.'
      } finally {
        this.isSubmitting = false
      }
    }
  }
}
</script>
