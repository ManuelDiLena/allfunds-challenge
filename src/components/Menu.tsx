import { Navbar, Title, Btn, BtnsMenu } from '../styles/styleMenu';
import { CiShoppingCart, CiHeart } from "react-icons/ci";

interface MenuProps {
  onHideCart: () => void;
  onHideFav: () => void;
}

export function Menu({ onHideCart, onHideFav }: MenuProps) {
  return (
    <Navbar>
      <Title>Allfunds Challenge</Title>
      <BtnsMenu>
        <Btn onClick={onHideCart}>
          <CiShoppingCart />
        </Btn>
        <Btn onClick={onHideFav}>
          <CiHeart />
        </Btn>
      </BtnsMenu>
    </Navbar>
  );
}