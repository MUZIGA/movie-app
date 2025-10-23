import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./index.css";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import MovieDetails from "./Pages/MovieDetails";
import Favorites from "./Pages/Favorites";
import useFetchMovies from "./hook/useFetchMovies";

function App() {
  const [favorites, setFavorites] = useState([]);
  const { movies, loading, error } = useFetchMovies();

  const handleFavorite = (movie) => {
    if (!favorites.some((fav) => fav.id === movie.id)) {
      setFavorites([...favorites, movie]);
      alert(`"${movie.title}" added to favorites! 🎬`);
    } else {
      alert(`"${movie.title}" is already in your favorites! ❤️`);
    }
  };

  return (
    <Router>
      <Navbar />
      
      {loading && <p className="text-center mt-10">Loading movies...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      {!loading && !error && (
        <Routes>
          <Route
            path="/"
            element={<Home movies={movies} onFavorite={handleFavorite} />}
          />
          <Route
            path="/movie/:id"
            element={<MovieDetails movies={movies} />}
          />
          <Route
            path="/favorites"
            element={<Favorites favorites={favorites} />}
          />
        </Routes>
      )}
    </Router>
  );
}

export default App;