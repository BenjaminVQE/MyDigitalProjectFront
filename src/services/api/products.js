const apiUrl = import.meta.env.VITE_API_URL
export async function fetchProducts() {
  const response = await fetch(`${apiUrl}/articles`)
  if (!response.ok) throw new Error('Erreur lors du chargement des produits')
  return await response.json()
}