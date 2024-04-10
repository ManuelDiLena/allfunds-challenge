import axios from 'axios';

const apiUrl = 'http://localhost:3000/grocery';

export interface IProduct {
  id: string;
  image_url: string;
  stock: number;
  productName: string;
  price: number;
  productDescription: string;
  favorites: boolean;
}

// Get all products from the API
export const getProducts = async (): Promise<IProduct[]> => {
  try {
    const res = await axios.get(`${apiUrl}`);
    return res.data as IProduct[]
  }
  catch (err) {
    throw new Error('Could not get product list')
  }
}