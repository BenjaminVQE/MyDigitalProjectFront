<script setup>
    import { getUserConnected } from '../services/api/profile.js'
    import { ref, onMounted } from 'vue'
    import { logoutUser } from '../services/api/logout.js'
    const profiles = ref([])
    const error = ref('')
    onMounted(async () => {
    try {
        profiles.value = await getUserConnected()
        console.log(profiles.value)
    } catch (e) {
        error.value = e.message
    }
    })
</script>
<template>
  <v-container>
    <v-card class="mx-auto" max-width="400">
      <v-card-title class="justify-center">   
      </v-card-title>
      <v-card-text>
        <v-list dense>
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{ profiles.firstName }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-email</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card-text>
      <v-card-actions>
        <v-btn color="primary" @click="editProfile">Modifier profil</v-btn>
        <v-spacer></v-spacer>
        <v-btn color="error" @click="logoutUser()">Déconnexion</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>



