import axios from 'axios';

const API_BASE_URL = 'http://localhost:5028/api';

export const loginRequest = async (email, password) => {
  const response = await axios.post(`${API_BASE_URL}/Auth/login`, {
    email,
    password,
  });

  return response.data.token;
};
