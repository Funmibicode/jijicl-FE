import {Routes, Route} from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Cart from './pages/Cart'
import ProductDetails from './pages/ProductDetails'



function App() {
  

  return (
  <>
   {/* <div style={{padding: 50, fontSize: 30, textAlign: 'center'}}>
      🔥 React is LIVE 🔥
    </div>*/}
  
    <Routes>
      <Route path="/" element={<Home/> }/>
      <Route path="/Cart" element={<Cart/> }/>
      <Route path="/product/:id" element={<ProductDetails/>} />
    </Routes> 
    </>
  )
}

export default App