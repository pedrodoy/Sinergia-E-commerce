'use client';

import { categories } from "@/utils/Categories";
import Container from "../Container";
import Category from "./Category";
import { usePathname, useSearchParams } from "next/navigation";
import { products } from "@/utils/products"; // Certifique-se do caminho correto
import { useState, useEffect } from "react";

const Categories = () => {
    const params = useSearchParams();
    const category = params?.get('category');
    const pathname = usePathname();

    const isMainPage = pathname === '/';

    const [filteredProducts, setFilteredProducts] = useState(products);

    useEffect(() => {
        if (!category || category === 'Tudo') {
            setFilteredProducts(products); 
        } else {
            setFilteredProducts(products.filter(product => product.category === category));
        }
    }, [category]);

    if (!isMainPage) return null;

    return (
        <div className="bg-white">
            <Container>
                <div className="pt-4 flex flex-row items-center justify-between overflow-x-auto">
                    {categories.map((item) => (
                        <Category
                            key={item.label}
                            label={item.label}
                            icon={item.icon}
                            selected={category === item.label || (category === null && item.label === 'Tudo')}
                        />
                    ))}
                </div>

            </Container>
        </div>
    );
};

export default Categories;
