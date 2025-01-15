import { Global, Main } from './App.styles';
import CatList from './features/cats/CatList';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './features/navbar/NavBar';
import FavouritesCats from './features/favourites/FavouritesCats';
import { useAppDispatch } from './store';
import { useEffect, useRef } from 'react';
import { getCats } from './features/cats/CatSlice';

function App() {
    const dispatch = useAppDispatch();
    const hasFetchedCats = useRef(false);
  
    useEffect(() => {
      if (!hasFetchedCats.current) {
        dispatch(getCats());
        hasFetchedCats.current = true;
      }
    }, [dispatch]);
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

export default App;
