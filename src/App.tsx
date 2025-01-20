import { Global, Main } from './App.styles';
import CatList from './features/cats/CatList';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './features/navbar/NavBar';
import FavouritesCats from './features/favourites/FavouritesCats';
import { useEffect, useRef } from 'react';
import { useAppDispatch, useAppSelector } from './store';
import {
  getCats,
  selectCats,
  selectCurrentPage,
  selectFetching,
} from './features/cats/CatsSlice';

function App() {
  console.log('App component rendered');
  const dispatch = useAppDispatch();
  const cats = useAppSelector(selectCats);
  const isInitialMount = useRef(true);
  const currentPage = useAppSelector(selectCurrentPage);
  useEffect(() => {
    console.log('Initial mount check');
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }
    if (cats.length === 0) {
      console.log('Fetching cats for the first time');
      dispatch(getCats(currentPage));
    }
  }, [dispatch, cats.length, currentPage]);
  return (
    <Router>
      <Global />
      <Main>
        <NavBar />
        <Routes>
          <Route path="/" element={<CatList />} />
          <Route path="/likes" element={<FavouritesCats />} />
        </Routes>
      </Main>
    </Router>
  );
}
//
export default App;
