import { render, screen } from '@testing-library/vue'
import NavigationButtons from '../ButtonStep.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [], // tu peux ajouter des routes si nécessaire
})

test('affiche les boutons de navigation avec les bons liens', async () => {
  render(NavigationButtons, {
    props: {
      Next: '/suivant',
      Back: '/precedent',
    },
    global: {
      plugins: [router], // router nécessaire pour <router-link>
    },
  })

  const backLink = screen.getByRole('link', { name: /précédent/i })
  const nextLink = screen.getByRole('link', { name: /suivant/i })

  expect(backLink).toHaveAttribute('href', '/precedent')
  expect(nextLink).toHaveAttribute('href', '/suivant')
})
