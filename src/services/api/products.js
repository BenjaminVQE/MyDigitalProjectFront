export async function fetchProducts() {
  const response = await fetch('https://benjamin-vaique.fr:8080/articles')
  if (!response.ok) throw new Error('Erreur lors du chargement des produits')
  return await response.json()
}