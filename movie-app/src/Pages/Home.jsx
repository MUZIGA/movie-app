import { useState } from "react";
import MovieCard from "../Components/MovieCard";
import SearchBar from "../Components/SearchBar";
import CategoryFilter from "../Components/CategoryFilter";

export default function Home({ movies, onFavorite }) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  const filteredMovies = movies.filter(
    (m) =>
      m.title.toLowerCase().includes(search.toLowerCase()) &&
      (category === "" || m.category === category)
  );

  const categories = [...new Set(movies.map((m) => m.category))];

  return (
    <div className="container mx-auto p-4">
      <SearchBar search={search} setSearch={setSearch} />
      <CategoryFilter categories={categories} setCategory={setCategory} />
      
      {filteredMovies.length === 0 ? (
        <p className="text-center text-gray-500">No movies found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} onFavorite={onFavorite} />
          ))}
        </div>
      )}
    </div>
  );
}