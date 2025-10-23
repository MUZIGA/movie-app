import { Link } from "react-router-dom";

export default function MovieCard({ movie, onFavorite }) {
  const handleFavoriteClick = () => {
    onFavorite(movie);
    // Optional: You can also show alert directly here
    // alert(`"${movie.title}" added to favorites!`);
  };

  return (
    <div className="bg-gray-100 rounded-lg shadow p-3 text-center">
      <img src={movie.image} alt={movie.title} className="w-full h-48 object-cover rounded" />
      <h2 className="text-lg font-semibold mt-2">{movie.title}</h2>
      <p className="text-sm text-gray-500">{movie.category}</p>
      
      <div className="mt-3 space-y-2">
        <Link 
          to={`/movie/${movie.id}`}
          className="block w-full bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700 transition-colors"
        >
          Details
        </Link>
        
        <button
          onClick={handleFavoriteClick}
          className="w-full bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 transition-colors"
        >
          Favorite
        </button>
      </div>
    </div>
  );
}