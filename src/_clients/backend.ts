import axios from 'axios';

const API_URL = 'http://localhost:8080';

export type UserData = {
    name: string;
    email: string;
    password: string;
    experience: number;
    progress_a: number;
    progress_b: number;
    progress_c: number;
    certificate: boolean;
};

export const createUser = async (userData: UserData) => {
  try {
    const response = await axios.post(`${API_URL}/student`, userData);
    return response;
  } catch (error) {
    console.error('Error creating user:', error);
    throw error;
  }
};
