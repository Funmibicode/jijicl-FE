import MovieCard from '../components/MovieCard' 
import FavoriteButton from '../components/FavoriteButton'
import NavBar from '../components/NavBar'
import { useMovie } from '../context/MovieContext'
import { Link} from 'react-router-dom'






const Home = () => {
  const { movies, loading, error, addFavorites } = useMovie();

  return (
    <div className="bg-rose-600 text-white min-h-screen p-8">  
      <NavBar/>
      
      <div className="text-3xl font-bold mb-8">Home page</div>
      
      <div className="mt-8">
        {loading ? (
          <div className="text-center text-xl">Loading...</div>
        ) : error ? (
          <div className="text-center text-xl text-yellow-300">Error: {error}</div>
        ) : movies?.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {movies.map(movie => {
  return (
      <div key={movie.imdbID} className="bg-white/10 backdrop-blur rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-300 shadow-lg">
      
      {/* Only image + text are clickable */}
      <Link to={`/SpMovie/${movie.imdbID}`}>
        <MovieCard movie={movie} />
      </Link>
      
      {/* Button sits outside Link */}
      <div className="p-4 pt-0">
        <FavoriteButton movie={movie} />
      </div>
    </div>
  )
})}
          </div>
        ) : (
          <div className="text-center text-xl mt-10 text-white/70">
            No movies found. Try searching!
          </div>
        )}
      </div>
    </div>
  )
}

export default Home