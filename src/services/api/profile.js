const apiUrl = import.meta.env.VITE_API_URL
export async function getUserConnected() {
  const response = await fetch(`${apiUrl}/me`, {
    headers: {  
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
  })
  if (!response.ok) throw new Error('Erreur lors du chargement des produits')
  return await response.json()
} 