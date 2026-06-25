import { useMovie } from '../context/MovieContext'

const FavoriteButton = ({ movie }) => {
  const { favorites, addFavorites, removeFromFavorites } = useMovie();
  const isFavorite = favorites.some(m => m.imdbID === movie.imdbID);
  
  const handleClick = (e) => {
    e.stopPropagation(); // stops Link from firing when you click button
    isFavorite ? removeFromFavorites(movie.imdbID) : addFavorites(movie)
  };
  
  return (
    <button 
      className="mt-3 w-full bg-white text-rose-600 font-semibold py-2 rounded-lg hover:bg-gray-100 transition" 
      onClick={handleClick}
    >
      {isFavorite ? '❤️ Remove' : '🤍 Add'}
    </button>
  )
}

export default FavoriteButton