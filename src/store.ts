import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector, type TypedUseSelectorHook } from 'react-redux';
import favouritesReducer, {
  STORAGE_KEY,
} from './features/favourites/favoritesSlice';

const store = configureStore({
  reducer: {
    favourites: favouritesReducer,
  },
});

store.subscribe(() => {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(store.getState().favourites)
  );
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
