// src/api/auth.ts
import axios from 'axios';

const API_URL = 'https://localhost:443/auth'; // Remplace par ton URL d'API

export const loginUser = async (email: string, password: string) => {
  try {
    const response = await axios.post(API_URL, { email, password });
    return response.data; // Renvoie les données, y compris le token JWT
  } catch (error) {
    // Vérifie si l'erreur provient bien d'Axios
    if (axios.isAxiosError(error)) {
      console.error('Erreur API :', error.response?.data);

      throw new Error(error.response?.data?.message || 'Une erreur est survenue');
    } else {
      console.error('Erreur inconnue :', error);
      throw new Error('Erreur inattendue');
    }
  }
};
