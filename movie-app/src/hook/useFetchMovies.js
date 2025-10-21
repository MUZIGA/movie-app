import { useEffect, useState } from "react";

export default function useFetchMovies() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("https://api.tvmaze.com/shows");
        if (!res.ok) throw new Error("Failed to fetch movies");
        const data = await res.json();

        // Format and clean data to match your MovieCard structure
        const formatted = data.slice(0, 30).map((show) => ({
          id: show.id,
          title: show.name,
          category: show.genres[0] || "Unknown",
          image: show.image?.medium || "https://via.placeholder.com/300x200",
          description: show.summary
            ? show.summary.replace(/<[^>]+>/g, "")
            : "No description available.",
        }));

        setMovies(formatted);
      } catch (err) {
        setError(err.message || "Error fetching movies");
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);
 return { movies, loading, error };
}