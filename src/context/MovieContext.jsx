import {useContext,createContext} from "react"

export const MovieContext = createContext();

export function MovieProvider ({children}){



  
  return(
    <MovieProvider.Provider values={{movie, loading, error}}>
      {children}
    </MovieProvider.Provider>
}
export  {MovieContext}