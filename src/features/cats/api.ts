import { Cat } from './types/Cat';
const apiKey = process.env.REACT_APP_API_KEY;
export const getCats = async (page: number = 0): Promise<Cat[]> => {
  if (!apiKey) {
    throw new Error('API key is missing');
  }

  const response = await fetch(
    `https://api.thecatapi.com/v1/images/search?limit=15&page=${page}`,
    {
      headers: {
        'Content-Type': 'application/json',
        'X-API-KEY': apiKey,
      },
    }
  );
  const data = await response.json();
  return data;
};
