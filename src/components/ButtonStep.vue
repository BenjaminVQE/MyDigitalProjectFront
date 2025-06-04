<script setup>
    import { ref, toRef } from 'vue'
    const props = defineProps({
    Next: {
        type: String,
        required: true
    },
    Back: {
        type: String,
        required: true
    }
    })
    const pathNext = toRef(props, 'Next')
    const pathBack = toRef(props, 'Back')
</script>
<template>
    <v-container>
        <v-row>
            <v-col class="d-flex justify-start">
                <router-link
                    :to="pathBack"
                >
                    <v-btn
                        prepend-icon="mdi-chevron-left"    
                    >
                        Précédent
                    </v-btn>
                </router-link>
            </v-col>
            <v-col class="d-flex justify-end">
                <router-link
                    :to="pathNext"
                >
                    <v-btn
                        append-icon="mdi-chevron-right"
                        color="primary"
                    >
                        Suivant
                    </v-btn>
                </router-link>
            </v-col>
        </v-row>
    </v-container>

</template>