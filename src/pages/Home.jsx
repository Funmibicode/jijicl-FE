import React, { useContext } from 'react'
import Card from '../components/Card'
import Navbar from '../components/NavBar'
import { MovieContext } from '../context/MovieContext'

const Home = () => {
  const { movies, loading, error, favorites , addFavorites} = useContext(MovieContext);

  return (
    <div className="bg-rose-600 text-white min-h-screen p-8">  
      <Navbar/>
      
      <div className="text-3xl font-bold mb-8">
        Home page
      </div>
      
      <Card name="funmibi"> 
        <p>Home page movies</p>
      </Card>

      <div className="mt-8">
        {loading ? (
          <div className="text-center text-xl">Loading...</div>
        ) : error ? (
          <div className="text-center text-xl text-yellow-300">Error: {error}</div>
        ) : movies && movies.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {movies.map((movie) => (
              <div 
                key={movie.imdbID} 
                className="bg-white/10 backdrop-blur rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-300 shadow-lg"
              >
                <img 
                  src={movie.Poster} 
                  alt={movie.Title}
                  className="w-full h-60 object-cover"
                />
                <div className="p-4">
                  <h4 className="font-bold text-lg truncate">{movie.Title}</h4>
                  <p className="text-sm text-gray-200">{movie.Year}</p>
                  <button className="mt-3 w-full bg-white text-rose-600 font-semibold py-2 rounded-lg hover:bg-gray-100 transition" 
onClick = { () => addFavorites(movie)}
                    >
                    ❤️ Favorite
                  </button>
                </div>
              </div>
            ))}
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