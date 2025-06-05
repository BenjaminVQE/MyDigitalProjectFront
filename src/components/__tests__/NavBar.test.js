import { render, screen, fireEvent } from '@testing-library/vue'
import UserMenu from '../NavBar.vue'
import { vi } from 'vitest'

vi.mock('../../services/api/logout.js', () => ({
  logoutUser: vi.fn(),
}))

import { logoutUser } from '../../services/api/logout.js'

const globalComponentsMock = {
  'v-btn': {
    template: `<button><slot /></button>`,
  },
  'v-icon': {
    template: `<span><slot /></span>`,
  },
  'v-menu': {
    template: `<div><slot name="activator" :props="{ on: {} }"></slot><slot /></div>`,
  },
  'v-list': { template: `<ul><slot /></ul>` },
  'v-list-item': { template: `<li><slot /></li>` },
  'v-list-item-title': { template: `<span><slot /></span>` },
  'v-app-bar': { template: `<header><slot /></header>` },
  'v-app-bar-title': { template: `<h1><slot /></h1>` },
  'v-card': { template: `<section><slot /></section>` },
  'v-layout': { template: `<div><slot /></div>` },
  'v-main': { template: `<main><slot /></main>` },
}

describe('UserMenu', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    localStorage.clear()
  })

  test('affiche Accueil, Connexion et Inscription si pas de token', async () => {
    render(UserMenu, {
      global: {
        components: globalComponentsMock,
      },
    })

    // Maintenant on peut cibler le bouton icon par role "button"
    const menuButton = screen.getByRole('button')
    await fireEvent.click(menuButton)

    expect(screen.getByText('Accueil')).toBeInTheDocument()
    expect(screen.getByText('Connexion')).toBeInTheDocument()
    expect(screen.getByText('Inscription')).toBeInTheDocument()

    expect(screen.queryByText('Mon Compte')).not.toBeInTheDocument()
    expect(screen.queryByText('Déconnexion')).not.toBeInTheDocument()
  })

  test('affiche Accueil, Mon Compte et Déconnexion si token présent', async () => {
    localStorage.setItem('token', 'fake-token')
    render(UserMenu, {
      global: {
        components: globalComponentsMock,
      },
    })

    const menuButton = screen.getByRole('button')
    await fireEvent.click(menuButton)

    expect(screen.getByText('Accueil')).toBeInTheDocument()
    expect(screen.getByText('Mon Compte')).toBeInTheDocument()
    expect(screen.getByText('Déconnexion')).toBeInTheDocument()

    expect(screen.queryByText('Connexion')).not.toBeInTheDocument()
    expect(screen.queryByText('Inscription')).not.toBeInTheDocument()
  })

  test('appelle logoutUser au clic sur Déconnexion', async () => {
    localStorage.setItem('token', 'fake-token')
    render(UserMenu, {
      global: {
        components: globalComponentsMock,
      },
    })

    const menuButton = screen.getByRole('button')
    await fireEvent.click(menuButton)

    const logoutItem = screen.getByText('Déconnexion')
    await fireEvent.click(logoutItem)

    expect(logoutUser).toHaveBeenCalled()
  })
})
