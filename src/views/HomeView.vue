<script setup>
 import Timeline from '../components/Timeline.vue'
 import Mockup from '../components/Mockup.vue'
 import ButtonStep from '../components/ButtonStep.vue'

</script>

<template>
    <Timeline :model-value="0" />
    <Mockup />
    <ButtonStep :Back="'/login'" :Next="'/products'"/>
</template>