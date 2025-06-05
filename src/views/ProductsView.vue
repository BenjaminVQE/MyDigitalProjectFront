<script setup>
 import Timeline from '../components/Timeline.vue'
 import ButtonStep from '../components/ButtonStep.vue'
 import ChoiceSupport from '../components/ChoiceSupport.vue'
 import Products from '../components/Products.vue'
</script>

<template>
    <Timeline :model-value="1" />
    <ChoiceSupport />
    <Products />
    <ButtonStep :Back="'/'" :Next="'/products'"/>
</template>