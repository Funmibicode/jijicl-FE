import {useContext,createContext,useState,useEffect} from "react"

const MovieContext = createContext();

export function MovieProvider ({children}){

  const [movies, setMovies] =useState([]);
  const [loading , setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [favorites, setFavorites] =useState([]);
  
  useEffect(() => {
    async function loadMovies (){
      try {
        const res = await fetch('https://www.omdbapi.com/?apikey=3f2ceb8a&s=batman')
        const data = await res.json()

        if (data.Response === "False") {
          setError(data.Error)
        } else {
          setMovies(data.Search)
        }
      } catch (error) {
        setError(error.message)
        
      } finally {
        setLoading(false)
      }
    }
    loadMovies();
  },[])

  const addFavorites = (movieToAdd) => {
  const isAlreadyFavorite = favorites.some(movie => movie.imdbID === movieToAdd.imdbID);
  
  if (!isAlreadyFavorite) {
    setFavorites([...favorites, movieToAdd]);
  }
};

  const removeFromFavorites = (id) => {
  setFavorites(favorites.filter(movie => movie.imdbID !== id))
  };
  
  
  return(
    <MovieContext.Provider value={{movies, loading, error, favorites, addFavorites, removeFromFavorites}}>
      {children}
    </MovieContext.Provider>
);}
export  {MovieContext}


