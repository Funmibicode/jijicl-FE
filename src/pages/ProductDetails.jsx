import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadProduct() {
      setLoading(true); // reset loading when ID changes
      try {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await res.json();
        if (!data || data.id === undefined) {
          setError("Product not found")
        } else {
          setProduct(data)
          setError(null)
        }
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }
    loadProduct();
  }, [id]);

  // Guard clauses - prevents crashing when product is null
  if (loading) return <div className="text-center text-xl text-white p-8 bg-[#0A1123] min-h-screen">Loading product...</div>

  if (error) return <div className="text-center text-xl text-yellow-300 p-8 bg-[#0A1123] min-h-screen">Error: {error}</div>

  if (!product) return <div className="text-center text-xl text-[#959BB5] p-8 bg-[#0A1123] min-h-screen">No product found</div>

  // Only gets here if product exists
  return (
    <div className="bg-[#0A1123] text-white min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-4 text-[#8387C3]">{product.title}</h1>
      <img src={product.image} alt={product.title} className="w-64 bg-white p-4 rounded mb-4" />
      <p className="text-lg text-[#959BB5]">{product.description}</p>
      <p className="mt-2">Category: {product.category}</p>
      <p>Price: ${product.price}</p>
      <p>Rating: {product.rating?.rate}/5</p>
    </div>
  )
}

export default ProductDetails