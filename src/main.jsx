import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import {MovieProvider} from './context/MovieContext'

import App from './App.jsx'

import './index.css'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <StrictMode>
  <MovieProvider>
    <App />
  </MovieProvider>  
  </StrictMode>
 </BrowserRouter>
)
