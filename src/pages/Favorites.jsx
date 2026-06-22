import React from 'react'

const Favorites = () => {

  const movies = [
    {id:1, tittle:"x-men", rating:4.3},
    {id:2, tittle:"Avengers", rating:3.3},
    {id:3, tittle:"spiderman", rating:4.5},
    {id:4, tittle:"Taitanic", rating:3.9},
  ]
  
  return (
    <div>
      <h1>Favorites Page </h1>
      <div>
        {movies.map((movie)  => {         return(
        <div>
          <p> {movie.id} </p>
          <h3>{movie.tittle}</h3>
        </div>
        );
        })}
      </div>
    </div>
  )
}

export default Favorites