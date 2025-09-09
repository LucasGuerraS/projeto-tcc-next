import { getSession } from '@/_utils/session';
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
  progress_d: number;
  certificate: boolean;
};

export type APIError = {
  code: string;
  message: string;
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

export const login = async (email: string, password: string) => {
  try {
    const response = await axios.post(`${API_URL}/student/login`, {
      email,
      password,
    });
    return response;
  } catch (error) {
    console.error('Error logging in:', error);
    throw error;
  }
};

export const getUserById = async (id: string) => {
  try {
    const response = await axios.get(`${API_URL}/student/${id}`);
    return response;
  } catch (error) {
    console.error('Error fetching user by ID:', error);
    throw error;
  }
};

export const updateClassProgress = async (classId: string) => {
  try {
    const session = await getSession();
    if (!session) {
      throw new Error('No active session');
    }
    const response = await axios.post(`${API_URL}/student/class/${classId}`, {
      id: session.value,
    });
    return response;
  } catch (error) {
    console.error('Error updating class progress:', error);
    throw error;
  }
};
