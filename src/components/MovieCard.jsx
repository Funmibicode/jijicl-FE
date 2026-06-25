import react from 'react'



const MovieCard = ({ movie }) => {
  if (!movie) return null;
  return (
    <>
      <img src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/300x450?text=No+Image"} 
           className="w-full h-60 object-cover" />
      <div className="p-4">
        <h4 className="font-bold text-lg truncate">{movie.Title}</h4>
        <p className="text-sm text-gray-200">{movie.Year}</p>
      </div>
    </>
  )
}
export default MovieCard