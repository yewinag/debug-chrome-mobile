import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

type product = {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
};
export default function Product() {
  const router = useRouter();
  const { _id } = router.query;
  console.log(_id);
  const [loading, setloading] = useState(false);
  const [product, setProduct] = useState<product>();

  useEffect(() => {
    fetchProduct();
  }, [_id]);

  const fetchProduct = async () => {
    try {
      setloading(true);
      const res = await fetch(`https://fakestoreapi.com/products/${_id}`).then(
        (res) => res.json()
      );
      setProduct(res);
      setloading(true);
    } catch (err: any) {
      setloading(true);
      return new Error(err);
    }
  };
  return (
    <>
      <main>
        <h3>Detail of products</h3>
        <p>{product?.title}</p>
      </main>
    </>
  );
}
