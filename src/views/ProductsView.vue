<script setup>
 import NavBar from '../components/NavBar.vue'
 import Timeline from '../components/Timeline.vue'
 import ButtonStep from '../components/ButtonStep.vue'
 import ChoiceSupport from '../components/ChoiceSupport.vue'
 import Products from '../components/Products.vue'
 import Footer from '../components/Footer.vue'

</script>

<template>
    <NavBar/>
    <Timeline :model-value="1" />
    <ChoiceSupport />
    <Products />
    <ButtonStep :Back="'/'" :Next="'/products'"/>
    <Footer>
    </Footer>   
</template>