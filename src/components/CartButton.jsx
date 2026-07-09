import { useProduct } from '../context/ProductContext'

const CartButton = ({ product }) => {
  const { cart, addToCart, removeFromCart } = useProduct();
  const isInCart = cart.some(p => p.id === product.id);
  
  const handleClick = (e) => {
    e.stopPropagation(); // stops Link from firing when you click button
    isInCart ? removeFromCart(product.id) : addToCart(product)
  };
  
  return (
    <button 
      className="mt-3 w-full bg-[#8387C3] text-[#0A1123] font-semibold py-2 rounded-lg hover:bg-[#959BB5] transition" 
      onClick={handleClick}
    >
      {isInCart ? '🛒 Remove' : '🛒 Add to Cart'}
    </button>
  )
}

export default CartButton