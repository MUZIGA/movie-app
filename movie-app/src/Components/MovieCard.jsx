export default function MovieCard({ movie, onFavorite }) {
  return (
    <div className="bg-gray-100 rounded-lg shadow p-3 text-center">
      <img src={movie.image} alt={movie.title} className="w-full h-48 object-cover rounded" />
      <h2 className="text-lg font-semibold mt-2">{movie.title}</h2>
      <p className="text-sm text-gray-500">{movie.category}</p>
      <button
        onClick={() => onFavorite(movie)}
        className="mt-2 bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
      >
         Favorite
      </button>
    </div>
  );
}