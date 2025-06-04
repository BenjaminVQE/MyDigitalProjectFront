import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { createVuetify } from 'vuetify'
import 'vuetify/styles'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import '@mdi/font/css/materialdesignicons.css'

const vuetify = createVuetify({
    theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        colors: {
          background: '#F9F4EA', // Fond blanc
          surface: '#F9F4EA', // Surface blanche
          primary: '#272756', // Couleur primaire (modifiable)
        },
      },
    },
  },
  components,
  directives,
})

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(vuetify)

app.mount('#app')
