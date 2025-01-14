import { Cat } from './types/Cat';
const apiKey = process.env.REACT_APP_API_KEY;
const baseUrl = 'https://api.thecatapi.com/v1/images/search?limit=15';

export const getCats = async (): Promise<Cat[]> => {
  if (!apiKey) {
    throw new Error('API key is missing');
  }

  const response = await fetch(baseUrl, {
    headers: {
      'Content-Type': 'application/json',
      'X-API-KEY': apiKey,
    },
  });
  const data = await response.json();
  return data;
};
