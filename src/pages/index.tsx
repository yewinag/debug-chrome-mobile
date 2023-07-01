import { Inter } from '@next/font/google';
import { useEffect, useState } from 'react';

const inter = Inter({ subsets: ['latin'] });
type product = {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
};
export default function Home() {
  const [loading, setloading] = useState(false);
  const [products, setProducts] = useState<product[]>([]);

  useEffect(() => {
    fetchProduct();
  }, ['fetch']);

  const fetchProduct = async () => {
    try {
      setloading(true);
      const res = await fetch('https://fakestoreapi.com/products').then((res) =>
        res.json()
      );
      setProducts(res);
      setloading(true);
    } catch (err: any) {
      setloading(true);
      return new Error(err);
    }
  };
  return (
    <>
      <main>
        <h3>Listing of products</h3>
        <ul>
          {products.map((pro) => (
            <li key={pro?.id}>
              <a href={`/products/${pro.id}`}>{pro.title}</a>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}
