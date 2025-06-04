<script setup>
    import { ref, toRef } from 'vue'

    const props = defineProps({
    modelValue: {
        type: Number,
        required: true
    }
    })
    const step = toRef(props, 'modelValue')
</script>

<template>
  <v-stepper
    vertical
    class="mt-10 ml-15 mr-15"
    elevation="0"
    v-model="step"
    >
    <v-stepper-header>
      <v-stepper-item
        title="Design mockup"
        value="1"
        color="success"
      ></v-stepper-item>

      <v-divider></v-divider>

      <v-stepper-item
        title="Choix produit"
        value="2"
        color="success"
      ></v-stepper-item>

      <v-divider></v-divider>
      <v-stepper-item
        title="Options"
        value="3"
        color="success"
      ></v-stepper-item>
      <v-divider></v-divider>

      <v-stepper-item
        title="Estimation"
        value="4"
        color="success"
      ></v-stepper-item>
    </v-stepper-header>
  </v-stepper>
  
</template>