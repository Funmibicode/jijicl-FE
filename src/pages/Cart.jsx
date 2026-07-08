import React from 'react'
import NavBar from '../components/NavBar'
import ProductCard from '../components/ProductCard'
import CartButton from '../components/CartButton'
import { useProduct } from '../context/ProductContext'
import { Link } from 'react-router-dom'



const Cart = () => {
  const { cart } = useProduct();

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-900 to-black text-white">
      <NavBar/>
      
      <div className="max-w-6xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Cart</h1>
        
        {cart.length === 0 ? (
          <p className="text-gray-300">Your cart is empty. Go add some products! 🛒</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {cart.map(product => (
              <div 
                key={product.id}
                className="bg-white/10 backdrop-blur rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-300 shadow-lg"
              >
                <Link to={`/product/${product.id}`}>
                  <ProductCard product={product} />
                </Link>
                <div className="p-4 pt-0">
                  <CartButton product={product} />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Cart