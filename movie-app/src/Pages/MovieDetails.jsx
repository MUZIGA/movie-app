import { useParams, Link } from "react-router-dom";

export default function MovieDetails({ movies }) {
  const { id } = useParams();
  const movie = movies.find((m) => m.id === parseInt(id));

  if (!movie) return <p>Movie not found.</p>;

  return (
    <div className="p-6">
      <img src={movie.image} alt={movie.title} className="rounded w-64 mb-4" />
      <h1 className="text-2xl font-bold">{movie.title}</h1>
      <p className="text-gray-500">{movie.category}</p>
      <p className="mt-4">{movie.description}</p>
      <Link to="/" className="text-blue-600 underline mt-4 block">← Back to Home</Link>
    </div>
  );
}