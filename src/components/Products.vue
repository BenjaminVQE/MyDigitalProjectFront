<script setup>
    import { ref, onMounted } from 'vue'
    import { fetchProducts } from '../services/api/products.js'

    const products = ref([])
    const error = ref('')

    onMounted(async () => {
    try {
        products.value = await fetchProducts()
        console.log(products.value)
    } catch (e) {
        error.value = e.message
    }
    })
</script>

<template>
    <div>
    <h2>Liste des produits</h2>
    <v-list>
      <v-list-item
        v-for="product in products"
        :key="product.id"
      >
        <v-list-item-title>{{ product.name }}</v-list-item-title>
        <v-list-item-subtitle>{{ product.matter }}</v-list-item-subtitle>
      </v-list-item>
    </v-list>
  </div>
</template>