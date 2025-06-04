<script setup>
import transat from '../assets/transat.png'
</script>
<template>
  <div class="mockup-container">
    <div class="mockup">
      <v-container class="mt-10">
        <v-row>
            <v-col>
                <v-img 
                    class="d-flex justify-center" 
                    :src="transat"  
                    max-width="300"
                    max-height="500"
                />
            </v-col>
            <v-col>
                <div class="d-flex flex-column align-center justify-center">    
                    <h1 class="text-h4 font-weight-bold">Observez un rendu visuel</h1>  
                </div>  
            </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>


