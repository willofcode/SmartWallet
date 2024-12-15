import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api/plaid';

export const createLinkToken = async () => {
  const response = await axios.post(`${API_BASE_URL}/link-token`);
  return response.data.linkToken;
};

export const exchangePublicToken = async (publicToken) => {
  const response = await axios.post(`${API_BASE_URL}/public-token`, { publicToken });
  return response.data.accessToken;
};

export const getBalances = async (accessToken) => {
  const response = await axios.post(`${API_BASE_URL}/balances`, { accessToken });
  return response.data;
};

export const getTransactions = async (accessToken, startDate, endDate) => {
  const response = await axios.post(`${API_BASE_URL}/transactions`, { accessToken, startDate, endDate });
  return response.data;
};
