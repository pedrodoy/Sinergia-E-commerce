'use client';

import { products } from "@/utils/products";
import Container from "./components/Container";
import Banner from "./components/Banner";
import ProductCard from "./components/Products/ProductCard";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const params = useSearchParams();
  const category = params?.get("category");

  // Filtrar produtos com base na categoria
  const filteredProducts = category && category !== "Tudo"
    ? products.filter((product) => product.category === category)
    : products; 

  return (
    <div className="p-8">
      <Container>
        <div>
          <Banner />
        </div>  
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
          {filteredProducts.map((product: any) => (
            <ProductCard key={product.id} data={product} />
          ))}
        
        </div>
      </Container>
    </div>
  );
}
