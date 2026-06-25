import React from 'react'
import NavBar from '../components/NavBar'
import MovieCard from '../components/MovieCard'
import FavoriteButton from '../components/FavoriteButton'
import { useMovie } from '../context/MovieContext'
import { Link } from 'react-router-dom'

const Favorites = () => {
  const { favorites } = useMovie();

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-900 to-black text-white">
      <NavBar/>
      
      <div className="max-w-6xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Favorites Page</h1>
        
        {favorites.length === 0 ? (
          <p className="text-gray-300">No favorites yet. Go add some movies! ❤️</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {favorites.map(fmovie => (
              <div 
                key={fmovie.imdbID}
                className="bg-white/10 backdrop-blur rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-300 shadow-lg"
              >
                <Link to={`/SpMovie/${fmovie.imdbID}`}>
                  <MovieCard movie={fmovie} />
                </Link>
                <div className="p-4 pt-0">
                  <FavoriteButton movie={fmovie} />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Favorites