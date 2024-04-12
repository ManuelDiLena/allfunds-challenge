import { useState } from 'react'
import './App.css';
import { Menu } from './components/Menu';
import { List } from './components/List';
import { Cart } from './components/Cart';
import { IProduct } from './service/products';

function App() {

  const [cartItems, setCartItems] = useState<IProduct[]>([])

  // Function to add products to cart
  const addToCart = (product: IProduct) => {
    // Check if the product is already in the cart
    const existProduct = cartItems.find((item) => item.id === product.id)

    if (existProduct) {
      // If it exists, the quantity is increased
      existProduct.quantity = (existProduct.quantity || 1) + 1
    }
    else {
      // If it doesn't exist, the product with quantity 1 is added by default
      setCartItems([...cartItems, {...product, quantity: 1}])
    }
  }

  return (
    <>
      <Menu />
      <div className='container'>
        <List addToCart={addToCart} />
        <Cart cartItems={cartItems} setCartItems={setCartItems} />
      </div>
    </>
  );
}

export default App
