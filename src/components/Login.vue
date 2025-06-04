<script setup>
    import { loginUser } from '../services/api/auth.js'
    import { ref } from 'vue'
    import logo from '../assets/logoTissup.png'
    const email = ref('')
    const password = ref('')
    const form = ref(null)
    const visible = ref(false)
    const errorMsg = ref('')
    const handleSubmit = async (event) => {
        event.preventDefault() 
        errorMsg.value = ''
        try {
            const response = await loginUser(email.value, password.value)
            console.log('Login successful:', response)
            const token = response.token
            localStorage.setItem('token', token)
            window.location.href = '/'
        } catch (error) {
            if (error.response && error.response.status === 401) {
              errorMsg.value = "L'email ou le mot de passe est incorrect."
            } else if (error.message && error.message.toLowerCase().includes('invalid')) {
                errorMsg.value = "L'email ou le mot de passe est incorrect."
            } else {
                errorMsg.value = 'Une erreur est survenue veuillez réessayez plus tard.'
            }
            console.error('Login failed:', error)
            
        }
    }
</script>

<template>
  <div>
    <v-img
      class="mx-auto my-6"
      max-width="300"
      :src=logo
    >
    </v-img>

    <v-card
      class="mx-auto pa-12 pb-8"
      elevation="8"
      max-width="448"
      rounded="lg"
    >
      <v-form
        v-model="form"
        @submit.prevent="handleSubmit"
      >
        <v-text-field
          density="compact"
          placeholder="Email address"
          prepend-inner-icon="mdi-email-outline"
          variant="outlined"
          label="Email"
          v-model="email"
        >
        </v-text-field>
        <v-text-field
            :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
            :type="visible ? 'text' : 'password'"
            density="compact"
            placeholder="Enter your password"
            prepend-inner-icon="mdi-lock-outline"
            variant="outlined"
            @click:append-inner="visible = !visible"
            label="Password"
            v-model="password"
        >
        </v-text-field>
        <v-btn
          class="mb-8"
          style="background-color: #272756;"
          color="#F9F4EA"
          size="large"
          variant="tonal"
          background-color="primary"
          block
          type="submit"
        >
          Se connecter
        </v-btn>
      </v-form>
      <v-alert
        v-if="errorMsg"
        type="error"
        class="mb-4"
      > 
        {{ errorMsg }}
      </v-alert>
      <v-card-text class="text-center">
        <router-link
          class="text-blue text-decoration-none"
          to="/register"
        >
          Pas encore de compte ? Inscrivez-vous <v-icon icon="mdi-chevron-right"></v-icon>
        </router-link>
      </v-card-text>
    </v-card>
  </div>
</template>