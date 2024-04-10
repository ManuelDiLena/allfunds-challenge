import { useEffect, useState } from 'react';
import { IProduct, getProducts } from '../service/products';

export function List() {
  const [products, setProducts] = useState<IProduct[]>([])

  useEffect(() => {
    getProducts()
      .then((data) => setProducts(data))
      .catch((error) => console.error(error))
  }, [])

  return (
    <div>
      <ul>
        {
          products.map((item) => (
            <li key={item.id}>
              <h3>{item.productName}</h3>
              <p>{item.stock}</p>
              <p>{item.price}</p>
            </li>
          ))
        }
      </ul>
    </div>
  );
}