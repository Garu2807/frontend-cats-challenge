import { Global, Main } from './App.styles';
import CatList from './features/cats/CatList';
import { BrowserRouter as Router, Route, Routes, HashRouter } from 'react-router-dom';
import NavBar from './features/navbar/NavBar';
import FavouritesCats from './features/favourites/FavouritesCats';

function App() {
  console.log('App component rendered');

  return (
    <HashRouter basename="/frontend-cats-challenge/">
      <Global />
      <Main>
        <NavBar />
        <Routes>
          <Route path="/" element={<CatList />} />
          <Route path="/likes" element={<FavouritesCats />} />
        </Routes>
      </Main>
    </HashRouter>
  );
}
//
export default App;
