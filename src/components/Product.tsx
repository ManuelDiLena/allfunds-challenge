import { Btn, BtnSection, CardProduct, FooterSection, ImageProduct, InfoSection, MainSection, PriceSection } from '../styles/styleProduct';
import { CiShoppingCart, CiHeart } from 'react-icons/ci';

interface ProductProps {
  productName: string;
  image: string;
  description: string;
  stock: number;
  price: number;
  addToCart: () => void;
  addToFav: () => void;
}

export function Product({ productName, image, stock, price, addToCart, addToFav }: ProductProps) {
  return (
    <CardProduct>
      <ImageProduct src={image} alt={productName} />
      <MainSection>
        <InfoSection>
          <h3>{productName}</h3>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </InfoSection>
        <PriceSection>
          <h3>${price}</h3>
        </PriceSection>
      </MainSection>
      <FooterSection>
        <p>Stock: {stock}</p>
        <BtnSection>
          <Btn onClick={addToFav}><CiHeart /></Btn>
          <Btn onClick={addToCart}><CiShoppingCart /></Btn>
        </BtnSection>
      </FooterSection>
    </CardProduct>
  );
}