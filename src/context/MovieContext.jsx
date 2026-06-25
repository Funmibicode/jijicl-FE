import { createContext, useContext, useState, useEffect, useReducer } from "react"

const MovieContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_FAVORITES": {
      const isAlreadyFavorite = state.some(m => m.imdbID === action.payload.imdbID);
      if (!isAlreadyFavorite) {
        return [...state, action.payload];
      }
      return state;
    }
    case "REMOVE_FAVORITES": {
      return state.filter(m => m.imdbID !== action.payload);
    }
    default:
      return state;
  }
};

export function MovieProvider({ children }) {
  const [favorites, dispatch] = useReducer(reducer, []);
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadMovies() {
      try {
        const res = await fetch('https://www.omdbapi.com/?apikey=3f2ceb8a&s=batman')
        const data = await res.json()
        if (data.Response === "False") {
          setError(data.Error)
        } else {
          setMovies(data.Search)
        }
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }
    loadMovies();
  }, [])

  const addFavorites = (movieToAdd) => {
    dispatch({ type: "ADD_FAVORITES", payload: movieToAdd });
  };

  const removeFromFavorites = (id) => {
    dispatch({ type: "REMOVE_FAVORITES", payload: id });
  };

  return (
    <MovieContext.Provider value={{ movies, loading, error, favorites, addFavorites, removeFromFavorites }}>
      {children}
    </MovieContext.Provider>
  );
}

export function useMovie() {
  return useContext(MovieContext)
}