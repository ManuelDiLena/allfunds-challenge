import { IProduct } from '../service/products';
import { CheckoutBtn, ContainerCart, ItemActions, ItemCart, ItemInfo } from '../styles/styleCart';
import { IoIosAddCircleOutline, IoIosRemoveCircleOutline } from 'react-icons/io';

interface CartProps {
  cartItems: IProduct[];
  setCartItems: React.Dispatch<React.SetStateAction<IProduct[]>>;
}

export function Cart({ cartItems, setCartItems }: CartProps) {

  const total = cartItems.reduce((acc, item) => acc + (item.price * (item.quantity || 1)), 0)

  // Function to increase the quantity of the product
  const itemIncrement = (item: IProduct) => {
    item.quantity = (item.quantity || 1) + 1
    setCartItems([...cartItems])
  }

  // Function to decrease the quantity of the product
  const itemDecrement = (item: IProduct) => {
    if (item.quantity && item.quantity > 0) {
      item.quantity -= 1
      setCartItems([...cartItems])

      // If the quantity is 0 eliminate the product
      if (item.quantity === 0) {
        const updatedCart = cartItems.filter((cartItem) => cartItem.id !== item.id)
        setCartItems(updatedCart)
      }
    }
  }

  return (
    <ContainerCart>
      <CheckoutBtn>Checkout $ {total}</CheckoutBtn>
      {
        cartItems.map((item) => (
          <ItemCart key={item.id}>
            <ItemInfo>
              <h3>{item.productName}</h3>
              <p>${item.price}</p>
            </ItemInfo>
            <ItemActions>
              <span onClick={() => itemDecrement(item)}>
                <IoIosRemoveCircleOutline />
              </span>
              <p>{item.quantity || 1}</p>
              <span onClick={() => itemIncrement(item)}>
                <IoIosAddCircleOutline />
              </span>
            </ItemActions>
          </ItemCart>
        ))
      }
    </ContainerCart>
  );
}