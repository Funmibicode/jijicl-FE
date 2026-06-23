import React, { useContext } from 'react'
import NavBar from '../components/NavBar'
import { MovieContext } from '../context/MovieContext'

const Favorites = () => {
  const { favorites, removeFromFavorites } = useContext(MovieContext);

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-900 to-black text-white">
      <NavBar/>
      
      <div className="max-w-6xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Favorites Page</h1>
        
        {favorites.length === 0 ? (
          <p className="text-gray-300">No favorites yet. Go add some movies! ❤️</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {favorites.map((fmovie) => ( 
              <div 
                key={fmovie.imdbID} 
                className="bg-white/10 backdrop-blur rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-300 shadow-lg"
              >
                <img 
                  src={fmovie.Poster !== "N/A" ? fmovie.Poster : "/placeholder.jpg"}  
                  alt={fmovie.Title} 
                  className="w-full h-60 object-cover"
                />
                <div className="p-4">
                  <h4 className="font-bold text-lg truncate">{fmovie.Title}</h4>
                  <p className="text-sm text-gray-200">{fmovie.Year}</p>
                  <button 
                    className="mt-3 w-full bg-white text-rose-600 font-semibold py-2 rounded-lg hover:bg-gray-100 transition" 
                    onClick={() => removeFromFavorites(fmovie.imdbID)}
                  >
                    Remove
                  </button>
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