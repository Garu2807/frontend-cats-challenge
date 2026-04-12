import CatList from "./features/cats/CatList";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./features/navbar/NavBar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import FavoritesCats from "./features/favourites/FavoritesCats";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router basename={import.meta.env.BASE_URL}>
        <NavBar />
        <Routes>
          <Route path="/" element={<CatList />} />
          <Route path="/likes" element={<FavoritesCats />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
