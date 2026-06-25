import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'



const MovieDetails = () => {
  const { imdbID } = useParams();

  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadMovie() {
      setLoading(true); // reset loading when ID changes
      try {
        const res = await fetch(`https://www.omdbapi.com/?apikey=3f2ceb8a&i=${imdbID}`);
        const data = await res.json();
        if (data.Response === "False") {
          setError(data.Error)
        } else {
          setMovie(data)
          setError(null)
        }
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }
    loadMovie();
  }, [imdbID]);

  // Guard clauses - prevents crashing when movie is null
  if (loading) return <div className="text-center text-xl text-white p-8">Loading movie...</div>

  if (error) return <div className="text-center text-xl text-yellow-300 p-8">Error: {error}</div>

  if (!movie) return <div className="text-center text-xl text-white/70 p-8">No movie found</div>

  // Only gets here if movie exists
  return (
    <div className="bg-rose-600 text-white min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-4">{movie.Title}</h1>
      <img src={movie.Poster} alt={movie.Title} className="w-64 rounded mb-4" />
      <p className="text-lg">{movie.Plot}</p>
      <p className="mt-2">Director: {movie.Director}</p>
      <p>Rating: {movie.imdbRating}/10</p>
    </div>
  )
}

export default MovieDetails