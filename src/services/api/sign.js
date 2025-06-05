import axios from 'axios';

const apiUrl = import.meta.env.VITE_API_URL || API_URL; 

export const registerUser = async (email,password, lastName,firstName, company, phoneNumber) => {
  try {
    const response = await axios.post(
        `${apiUrl}/users`, 
        { email, password, lastName, firstName, company, phoneNumber },
    );
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