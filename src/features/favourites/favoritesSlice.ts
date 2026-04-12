import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../store';
import type { FavouritesState } from '../cats/types/FavouritesState';

export const STORAGE_KEY = 'favouritesState';

function loadFavouritesState(): FavouritesState {
  const storedState = localStorage.getItem(STORAGE_KEY);

  if (storedState) {
    try {
      return JSON.parse(storedState) as FavouritesState;
    } catch (error) {
      console.error('Failed to parse favourites state from localStorage', error);
    }
  }

  return { favourites: [] };
}

const initialState: FavouritesState = loadFavouritesState();

const favouritesSlice = createSlice({
  name: 'favourites',
  initialState,
  reducers: {
    addToFavourites: (state, action: PayloadAction<string>) => {
      if (!state.favourites.includes(action.payload)) {
        state.favourites.push(action.payload);
      }
    },
    removeFromFavourites: (state, action: PayloadAction<string>) => {
      state.favourites = state.favourites.filter((id) => id !== action.payload);
    },
    toggleFavourite: (state, action: PayloadAction<string>) => {
      const id = action.payload;

      state.favourites = state.favourites.includes(id)
        ? state.favourites.filter((favouriteId) => favouriteId !== id)
        : [...state.favourites, id];
    },
  },
});

export const { addToFavourites, removeFromFavourites, toggleFavourite } =
  favouritesSlice.actions;

export const selectFavouriteIds = (state: RootState) =>
  state.favourites.favourites;

export const selectIsFavourite =
  (catId: string) =>
  (state: RootState): boolean =>
    state.favourites.favourites.includes(catId);

export default favouritesSlice.reducer;
