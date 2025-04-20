"use client";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import styles from "./styles.module.scss";

type Product = {
  id: number;
  title: string;
  thumbnail: string;
};

const Pagination = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState<Product[]>([]);
  const [pages, setPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);

  const fetchProducts = useCallback(async () => {
    try {
      setLoading(true);
      const response = await fetch(`https://dummyjson.com/products?limit=200`);
      const data = await response.json();

      setProducts(data.products);
      setPages(data.total / 10);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) {
    return <div style={{ textAlign: "center" }}>Loading...</div>;
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Pagination</h1>
      <div className={styles.pagination}>
        {Array.from({ length: pages }, (_, index) => (
          <button
            key={index}
            className={`${styles.button} ${
              index === currentPage ? styles.active : ""
            }`}
            onClick={() => setCurrentPage(index)}
          >
            {index + 1}
          </button>
        ))}
      </div>
      <div className={styles.productContainer}>
        {products
          .slice(currentPage * 10, (currentPage + 1) * 10)
          .map((product) => {
            return (
              <div key={product.id} className={styles.productCard}>
                <Image
                  src={product.thumbnail}
                  alt={product.title}
                  width={100}
                  height={100}
                />
                <h1 className={styles.productTitle}>{product.title}</h1>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Pagination;
