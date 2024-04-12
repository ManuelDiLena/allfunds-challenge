import { useState } from 'react'
import './App.css';
import { Menu } from './components/Menu';
import { List } from './components/List';
import { Cart } from './components/Cart';
import { IProduct } from './service/products';

function App() {

  const [cartItems, setCartItems] = useState<IProduct[]>([])

  const addToCart = (product: IProduct) => {
    setCartItems([...cartItems, product])
  }

  return (
    <>
      <Menu />
      <div className='container'>
        <List addToCart={addToCart} />
        <Cart cartItems={cartItems} />
      </div>
    </>
  );
}

export default App
