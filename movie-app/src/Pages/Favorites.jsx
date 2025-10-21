import MovieCard from "../Components/MovieCard";

export default function Favorites({ favorites }) {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">My Favorite Movies</h2>
      {favorites.length === 0 ? (
        <p>You have 0 favorite movies.</p>
      ) : (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {favorites.map((movie) => (
            <MovieCard key={movie.id} movie={movie} onFavorite={() => {}} />
          ))}
        </div>
      )}
    </div>
  );
}
