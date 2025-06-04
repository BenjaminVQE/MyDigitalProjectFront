
<template>
    <v-container>
        <v-row>
            <v-col>
                <div >    
                    <h1 class="d-flex flex-column align-center justify-center">
                        Choisissez votre support
                    </h1>
                </div>  
            </v-col>
        </v-row>
        <v-row class="align-center justify-center">
            <v-col cols="auto" >
                <v-checkbox 
                    label="Bache publicitaire"
                    value="Bache publicitaire"
                >
                </v-checkbox>
            </v-col>
            <v-col cols="auto">
                <v-checkbox
                    label="Bache micro-perforée"
                    value="Bache micro-perforée"
                >
                </v-checkbox>
            </v-col>
            <v-col cols="auto">
                <v-checkbox
                    label="Bache mesh"
                    value="Bache mesh"
                >
                </v-checkbox>
            </v-col>
            <v-col cols="auto">
                <v-checkbox
                    label="Bache opaque"
                    value="Bache opaque"
                >
                </v-checkbox>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <div>
                    <h1 class="d-flex flex-column align-center justify-center">
                        Quelle est la quantité de support en m² ?
                    </h1>
                </div>
            </v-col>
        </v-row>
        <v-row class="align-center justify-center" >
            <v-col cols="auto">
                <v-text-field
                    label="Quantité"
                    placeholder="Quantité"
                    variant="outlined"
                    type="number"
                    max-height="100"          
                >
                </v-text-field>
            </v-col>
        </v-row>
    </v-container>
</template>