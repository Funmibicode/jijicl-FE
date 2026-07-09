import ProductCard from '../components/ProductCard' 
import CartButton from '../components/CartButton'
import NavBar from '../components/NavBar'
import { useProduct } from '../context/ProductContext'
import { Link } from 'react-router-dom'

const Home = () => {
  const { products, loading, error } = useProduct();

  return (
    <div className="bg-[#0A1123] text-white min-h-screen p-8">  
      <NavBar/>
      
      <div className="text-3xl font-bold mb-8 text-[#8387C3]">Shop</div>
      
      <div className="mt-8">
        {loading ? (
          <div className="text-center text-xl">Loading...</div>
        ) : error ? (
          <div className="text-center text-xl text-yellow-300">Error: {error}</div>
        ) : products?.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {products.map(product => {
  return (
      <div key={product.id} className="bg-[#3A3E6C]/30 backdrop-blur rounded-2xl overflow-hidden border border-[#3A3E6C] hover:scale-105 transition-transform duration-300 shadow-lg">
      
      {/* Only image + text are clickable */}
      <Link to={`/product/${product.id}`}>
        <ProductCard product={product} />
      </Link>
      
      {/* Button sits outside Link */}
      <div className="p-4 pt-0">
        <CartButton product={product} />
      </div>
    </div>
  )
})}
          </div>
        ) : (
          <div className="text-center text-xl mt-10 text-[#959BB5]">
            No products found.
          </div>
        )}
      </div>
    </div>
  )
}

export default Home