import CatList from "./features/cats/CatList";
import { HashRouter as Router, Route, Routes, BrowserRouter } from "react-router-dom";
import NavBar from "./features/navbar/NavBar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import FavoritesCats from "./features/favourites/FavoritesCats";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <NavBar />
        <Routes>
          <Route path="/" element={<CatList />} />
          <Route path="/likes" element={<FavoritesCats />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
