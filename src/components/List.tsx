import { useEffect, useState } from 'react';
import { ContainerList } from '../styles/styleList';
import { IProduct, getProducts } from '../service/products';
import { Product } from './Product';

interface ListProps {
  addToCart: (product: IProduct) => void;
  addToFav: (product: IProduct) => void;
}

export function List({ addToCart, addToFav }: ListProps) {
  const [products, setProducts] = useState<IProduct[]>([])

  // Rendering of the list of products obtained
  useEffect(() => {
    getProducts()
      .then((data) => setProducts(data))
      .catch((error) => console.error(error))
  }, [])

  return (
    <>
    <ContainerList>
      {
        products.map((item) => (
          <Product 
            key={item.id}
            productName={item.productName}
            image={item.image_url}
            description={item.productDescription}
            stock={item.stock}
            price={item.price}
            addToCart={() => addToCart(item)}
            addToFav={() => addToFav(item)}
          />
        ))
      }
    </ContainerList>
    </>
  );
}