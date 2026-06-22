
import {Routes, Route} from 'react-router-dom'
import './App.css'
import Home from './pages/Home'



function App() {
  

  return (
  <>
    <div style={{padding: 50, fontSize: 30, textAlign: 'center'}}>
      🔥 React is LIVE 🔥
    </div>
  
    <Routes>
      <Route path="/" element={<Home /> }/>
    
    </Routes>
    </>
  )
}

export default App

