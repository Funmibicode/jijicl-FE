
import {Routes, Route} from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Favorites from './pages/Favorites'



function App() {
  

  return (
  <>
   {/* <div style={{padding: 50, fontSize: 30, textAlign: 'center'}}>
      🔥 React is LIVE 🔥
    </div>*/}
  
    <Routes>
      <Route path="/" element={<Home/> }/>
      <Route path="/Favorites" element={<Favorites/> }/>
    </Routes> 
    </>
  )
}

export default App

