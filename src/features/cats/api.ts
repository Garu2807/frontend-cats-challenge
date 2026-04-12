import type { Cat } from "./types/Cat";
const apiKey = import.meta.env.VITE_API_KEY;

export const getCats = async (page: number): Promise<Cat[]> => {
  const url = `https://api.thecatapi.com/v1/images/search?limit=15&page=${page}`;
  if (!apiKey) {
    console.error("API key is missing");
    throw new Error("API key is missing");
  }
  try {
    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        "X-API-KEY": apiKey,
      },
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Network response was not ok", error);
    throw new Error("Network response was not ok");
  }
};

export const getCatById = async (id: string): Promise<Cat> => {
  const url = `https://api.thecatapi.com/v1/images/${id}`;

  if (!apiKey) {
    console.error('API key is missing');
    throw new Error('API key is missing');
  }

  try {
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        'X-API-KEY': apiKey,
      },
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    return response.json();
  } catch (error) {
    console.error('Network response was not ok', error);
    throw new Error('Network response was not ok');
  }
};
