import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [],
    cartId: null,
    loading: false,
    currentUser: null, // IRI de l'utilisateur connecté
  }),

  getters: {
    itemCount: (state) => {
      return state.items.reduce((total, item) => total + item.quantity, 0)
    },
    totalPrice: (state) => {
      return state.items.reduce((total, item) => total + (item.price * item.quantity), 0)
    },
    // Prépare les données pour l'API au format attendu
    cartPayload: (state) => {
      return {
        user: state.currentUser, // IRI utilisateur
        articles: state.items.map(item => item.iri) // Array d'IRI articles
      }
    }
  },

  actions: {
    // Initialise l'utilisateur (à appeler au login)
    setCurrentUser(userIri) {
      this.currentUser = userIri
    },

    addToCart(product) {
      // Vérifie si le produit existe déjà dans le panier
      const existingItem = this.items.find(item => item.id === product.id)
      
      if (existingItem) {
        // Si existe, augmente la quantité
        existingItem.quantity++
      } else {
        // Sinon, ajoute le produit avec quantité 1
        this.items.push({
          id: product.id,
          name: product.name,
          price: product.price,
          quantity: 1,
          iri: product['@id'] || `/api/products/${product.id}` // IRI du produit
        })
      }
      
      // Sauvegarde automatique en BDD
      this.saveCart()
    },

    removeFromCart(productId) {
      const index = this.items.findIndex(item => item.id === productId)
      if (index > -1) {
        this.items.splice(index, 1)
        this.saveCart()
      }
    },

    updateQuantity(productId, quantity) {
      const item = this.items.find(item => item.id === productId)
      if (item) {
        if (quantity <= 0) {
          this.removeFromCart(productId)
        } else {
          item.quantity = quantity
          this.saveCart()
        }
      }
    },

    clearCart() {
      this.items = []
      this.saveCart()
    },

    // Sauvegarde le panier en BDD via ton API
    async saveCart() {
      if (!this.currentUser) {
        console.warn('Utilisateur non connecté, impossible de sauvegarder')
        return
      }

      this.loading = true
      
      try {
        const payload = this.cartPayload
        
        if (this.cartId) {
          // Mise à jour du panier existant
          const response = await fetch(`/api/carts/${this.cartId}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
              // Ajoute tes headers d'auth si nécessaire
              // 'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(payload)
          })
          
          if (!response.ok) {
            throw new Error('Erreur lors de la mise à jour du panier')
          }
        } else {
          // Création d'un nouveau panier
          const response = await fetch('/api/carts', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              // 'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(payload)
          })
          
          if (!response.ok) {
            throw new Error('Erreur lors de la création du panier')
          }
          
          const data = await response.json()
          this.cartId = data.id
        }
        
        console.log('Panier sauvegardé avec succès')
        
      } catch (error) {
        console.error('Erreur sauvegarde panier:', error)
        // Tu peux ajouter une notification d'erreur ici
      } finally {
        this.loading = false
      }
    },

    // Charge le panier depuis la BDD
    async loadCart() {
      if (!this.currentUser) return
      
      this.loading = true
      
      try {
        const response = await fetch('/api/carts/current', {
          headers: {
            // 'Authorization': `Bearer ${token}`
          }
        })
        
        if (response.ok) {
          const cartData = await response.json()
          
          if (cartData) {
            this.cartId = cartData.id
            
            // Reconstitue les items depuis les articles
            // Tu devras adapter selon la structure de ta réponse API
            this.items = cartData.articles.map(articleIri => {
              // Ici, tu devras récupérer les détails des produits
              // soit depuis une autre API, soit si inclus dans la réponse
              return {
                id: extractIdFromIri(articleIri),
                iri: articleIri,
                quantity: 1, // À adapter selon ton système
                // name, price... à récupérer
              }
            })
          }
        }
        
      } catch (error) {
        console.error('Erreur chargement panier:', error)
      } finally {
        this.loading = false
      }
    }
  }
})

// Fonction utilitaire pour extraire l'ID depuis l'IRI
function extractIdFromIri(iri) {
  return iri.split('/').pop()
}