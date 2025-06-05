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
    <h1 style="text-align: center;">Liste des produits</h1>
    <v-container>
      <v-row>
        <v-col
        v-for="product in products.member" 
        :key="product.id" cols="12" sm="6" md="4">
          <v-card class="pa-2">
            <v-card-title class="text-h6">{{ product.name }}</v-card-title>
            <v-card-subtitle>{{ product.price }} €</v-card-subtitle>
            <v-card-actions>  
              <v-btn color="primary" @click="cart.addToCart(product)">Ajouter au panier</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
    </v-row>

    </v-container>
  </div>
</template>