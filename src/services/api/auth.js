import axios from 'axios';

const apiUrl = import.meta.env.VITE_API_URL


export const loginUser = async (email, password) => {
  try {
    const response = await axios.post(`${apiUrl}/auth`, { email, password });
    return response.data; 
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Erreur API :', error.response?.data);
      throw new Error(error.response?.data?.message || 'Une erreur est survenue');
    } else {
      console.error('Erreur inconnue :', error);
      throw new Error('Erreur inattendue');
    }
  }
};