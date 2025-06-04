<script setup>
    import { registerUser } from '../services/api/sign.js'
    import { ref } from 'vue'
    import logo from '../assets/logoTissup.png'
    const visible = ref(false)
    const email = ref('')
    const password = ref('')
    const lastName = ref('')
    const firstName = ref('')
    const company = ref('')
    const phoneNumber = ref('')
    const form = ref(null) 
    const phoneRules = [
        v => !!v || 'Le numéro est requis',
        v => /^(\+33|0)[1-9](\d{2}){4}$/.test(v) || 'Numéro invalide'
    ]

    const errors = ref({
        email: '',
        password: '',
        lastName: '',
        firstName: '',
        company: '',
        phoneNumber: ''
    })
    
    const handleSubmit = async (event) => {
        event.preventDefault() 
        try {
            const response = await registerUser(email.value, password.value, lastName.value, firstName.value, company.value, phoneNumber.value) 
            console.log('Register successful:', response)
            window.location.href = '/login'
        } catch (error) {
            if (error.response && error.response.data) {
                Object.assign(errors.value, error.response.data)      
        }
            console.error('Register failed:', error)
        }
    }   
</script>

<template>
  <div class="mb-12">
    <v-img
      class="mx-auto my-6"
      height="100"
      :src=logo
    ></v-img>

    <v-card
      class="mx-auto pa-12 pb-8"
      elevation="8"
      max-width="448"
      rounded="lg"
    >
        <v-form
            v-model="form"
            @submit.prevent="handleSubmit"
            ref="form"
        >
            <v-text-field
                density="compact"
                placeholder="Email address"
                prepend-inner-icon="mdi-email-outline"
                variant="outlined"
                label="Email"
                :rules="[(v) => !!v || 'L\'email est requis', (v) => /.+@.+\..+/.test(v) || 'Email invalide']"
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
                required
                v-model="password"
                :rules="[(v) => !!v || 'Ce champ est requis']"
                
            >
            </v-text-field>
            <v-text-field
                density="compact"
                placeholder="Enter your lastName"
                prepend-inner-icon="mdi-account"
                variant="outlined"
                label="LastName"
                required 
                v-model="lastName"
                :rules="[(v) => !!v || 'Ce champ est requis']"
            >
            </v-text-field>
            <v-text-field
                density="compact"
                placeholder="Enter your firstName"
                prepend-inner-icon="mdi-account"
                variant="outlined"
                label="FirstName"
                required
                v-model="firstName"
                :rules="[(v) => !!v || 'Ce champ est requis']"
               
            >
            </v-text-field>
            <v-text-field
                density="compact"
                placeholder="Enter your company"
                prepend-inner-icon="mdi-domain"
                variant="outlined"
                label="company"
                required
                v-model="company"
                :rules="[(v) => !!v || 'Ce champ est requis']"
                
            >
            </v-text-field>
            <v-text-field
                density="compact"
                placeholder="Enter your phone"
                prepend-inner-icon="mdi-phone"
                variant="outlined"
                label="phoneNumber"
                :rules="phoneRules"
                required
                v-model="phoneNumber"
                
                
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
                S'Inscrivez-vous
            </v-btn>
        </v-form>
        <v-card-text class="text-center">
            <router-link
                class="text-blue text-decoration-none"
                to="/login"
                >
                Déjà un compte ? Connectez-vous <v-icon icon="mdi-chevron-right"></v-icon>
            </router-link>
        </v-card-text>
    </v-card>
  </div>
</template>