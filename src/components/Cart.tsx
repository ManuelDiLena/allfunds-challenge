import { IProduct } from '../service/products';
import { CheckoutBtn, ContainerCart, ItemActions, ItemCart, ItemInfo } from '../styles/styleCart';
import { IoIosAddCircleOutline, IoIosRemoveCircleOutline } from 'react-icons/io';

interface CartProps {
  cartItems: IProduct[];
}

export function Cart({ cartItems }: CartProps) {
  return (
    <ContainerCart>
      <CheckoutBtn>Checkout $$</CheckoutBtn>
      {
        cartItems.map((item) => (
          <ItemCart key={item.id}>
            <ItemInfo>
              <h3>{item.productName}</h3>
              <p>${item.price}</p>
            </ItemInfo>
            <ItemActions>
              <span><IoIosRemoveCircleOutline /></span>
              <p>1</p>
              <span><IoIosAddCircleOutline /></span>
            </ItemActions>
          </ItemCart>
        ))
      }
    </ContainerCart>
  );
}