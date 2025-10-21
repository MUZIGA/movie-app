import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import MovieDetails from "./pages/MovieDetail";
import Favorites from "./Pages/Favorites";

function App() {
  const [favorites, setFavorites] = useState([]);

  const movies = [
    { id: 1, title: "Inception", category: "Sci-Fi", image: "https://via.placeholder.com/300x200", description: "A mind-bending thriller." },
    { id: 2, title: "Titanic", category: "Romance", image: "https://via.placeholder.com/300x200", description: "A tragic love story." },
    { id: 3, title: "Avengers", category: "Action", image: "https://via.placeholder.com/300x200", description: "Superheroes unite!" },
  ];

  const handleFavorite = (movie) => {
    if (!favorites.some((fav) => fav.id === movie.id)) {
      setFavorites([...favorites, movie]);
    }
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home movies={movies} onFavorite={handleFavorite} />} />
        <Route path="/movie/:id" element={<MovieDetails movies={movies} />} />
        <Route path="/favorites" element={<Favorites favorites={favorites} />} />
      </Routes>
    </Router>
  );
}export default App