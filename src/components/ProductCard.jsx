import react from 'react'

const ProductCard = ({ product }) => {
  if (!product) return null;
  return (
    <>
      <img src={product.image} 
           className="w-full h-60 object-contain bg-white p-4" />
      <div className="p-4">
        <h4 className="font-bold text-lg truncate">{product.title}</h4>
        <p className="text-sm text-gray-200">${product.price}</p>
      </div>
    </>
  )
}
export default ProductCard