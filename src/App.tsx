import { useEffect, useState } from 'react'
import './App.css';
import { Menu } from './components/Menu';
import { List } from './components/List';
import { Cart } from './components/Cart';
import { Favorites } from './components/Favorites'
import { IProduct } from './service/products';
import useToggle from './hooks/useToggle'

function App() {

  const [cartItems, setCartItems] = useState<IProduct[]>([])
  const [cartVisible, toggleCart] = useToggle(false)
  const [favVisible, toggleFav] = useToggle(false)
  const [favItems, setFavItems] = useState<IProduct[]>([])
  const [mobileScreen, toggleMobileScreen] = useToggle(false)
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth)

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const showFullScreenCart = () => {
    toggleMobileScreen()
    toggleCart()
  }

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

  // Function to add products to favorites
  const addToFav = (product: IProduct) => {
    // Check if the product is already in the list
    const existProduct = favItems.find((item) => item.id === product.id)

    if (!existProduct) {
      setFavItems([...favItems, {...product}])
    }
  }

  return (
    <>
      <Menu onHideCart={mobileScreen ? showFullScreenCart : toggleCart} onHideFav={toggleFav} />
      <div className='container'>
        {
          windowWidth > 450 && (
            favVisible ? (
              <>
              <List 
                addToCart={addToCart}
                addToFav={addToFav}
              />
              <Favorites 
                favItems={favItems}
                setFavItems={setFavItems}
              />
              </>
            ) : (
              <>
              <List 
                addToCart={addToCart}
                addToFav={addToFav}
              />
              <Cart 
                cartItems={cartItems}
                setCartItems={setCartItems}
              />
              </>
            )
          )
        }
        {
          windowWidth < 450 && (
            cartVisible ? (
              <>
              <Cart 
                cartItems={cartItems}
                setCartItems={setCartItems}
              />
              </>
            ) : (
              <>
              <List 
                addToCart={addToCart}
                addToFav={addToFav}
              />
              </>
            )
          )
        }
      </div>
    </>
  );
}

export default App
