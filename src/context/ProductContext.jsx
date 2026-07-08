import { createContext, useContext, useState, useEffect, useReducer } from "react"

const ProductContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const isAlreadyInCart = state.some(p => p.id === action.payload.id);
      if (!isAlreadyInCart) {
        return [...state, action.payload];
      }
      return state;
    }
    case "REMOVE_FROM_CART": {
      return state.filter(p => p.id !== action.payload);
    }
    default:
      return state;
  }
};

export function ProductProvider({ children }) {
  const [cart, dispatch] = useReducer(reducer, []);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadProducts() {
      try {
        const res = await fetch('https://fakestoreapi.com/products')
        const data = await res.json()
        setProducts(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }
    loadProducts();
  }, [])

  const addToCart = (productToAdd) => {
    dispatch({ type: "ADD_TO_CART", payload: productToAdd });
  };

  const removeFromCart = (id) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: id });
  };

  return (
    <ProductContext.Provider value={{ products, loading, error, cart, addToCart, removeFromCart }}>
      {children}
    </ProductContext.Provider>
  );
}

export function useProduct() {
  return useContext(ProductContext)
}