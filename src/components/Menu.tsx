import { Navbar, Title, Btn } from '../styles/styleMenu';
import { CiHeart } from "react-icons/ci";

interface MenuProps {
  onHideFav: () => void;
}

export function Menu({ onHideFav }: MenuProps) {
  return (
    <Navbar>
      <Title>Allfunds Challenge</Title>
      <Btn onClick={onHideFav}>
        <CiHeart />
      </Btn>
    </Navbar>
  );
}