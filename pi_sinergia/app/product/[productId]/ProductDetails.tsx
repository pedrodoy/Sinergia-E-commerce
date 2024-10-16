'use client';

import Button from "@/app/components/Button";
import ProductImage from "@/app/components/Products/ProductImage";
import SetQuantity from "@/app/components/Products/SetQuantity";
import { useCart } from "@/hooks/useCart";
import { Rating } from "@mui/material";
import React, { useCallback, useState } from "react";

interface ProductDetailsProps{
    product: any
}

export type CartProductType = {
    id:string,
    name:string,
    description:string
    category:string,
    brand:string,
    selectedImg: SelectedImgType,
    quantity: number,
    price: number
}

export type SelectedImgType = {
    color:string,
    colorCode:string,
    image:string
}

const Horizontal = () =>{
    return <hr className="w-[30%] my-2"/>
}

const ProductDetails:React.FC<ProductDetailsProps> = ({product}) => {
    const {handleAddProductToCart, cartProducts} = useCart()
    const {cartTotalQty} = useCart()
    const [cartProduct, setCartProduct] = useState<CartProductType>({
        id:product.id,
        name:product.name,
        description:product.description,
        category:product.category,
        brand:product.brand,
        selectedImg: {...product.images[0]},
        quantity: 1,
        price: product.price,
    });


    const [ratingValue, setRatingValue] = React.useState<number | null>(4);

    const handleRatingChange = (event: React.ChangeEvent<{}>, newValue: number | null) => {
        setRatingValue(newValue);  
    };

    const handleQtyIncrease = useCallback(() =>{

        if(cartProduct.quantity === 99){
            return;
        }

        setCartProduct((prev) => {
            return {...prev, quantity: prev.quantity + 1 }
        });

    }, [cartProduct])
    const handleQtyDecrease = useCallback(() =>{

        if(cartProduct.quantity === 1){
            return;
        }

        setCartProduct((prev) => {
            return {...prev, quantity: prev.quantity - 1 }
        });

    }, [cartProduct])

    return <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <ProductImage cartProduct={cartProduct} product={product}/>
        <div className="flex flex-col gap-1 text-slate-500 text-sm">
            <h2 className="text-3xl font-medium text-slate-700">{product.name}</h2>
            <div className="flex items-center gap-2 ">
                <Rating
                value={ratingValue}              
                onChange={handleRatingChange}      
                precision={0.5}                    
                />
                <div>{product.reviews.length} reviews</div>
            </div>
            <Horizontal />
            <div className="text-justify">{product.description}</div>
            <Horizontal />
            <div>
                <span className="font-semibold">CATEGORIA:</span> {product.category}
            </div>
            <div>
                <span className="font-semibold">MARCA:</span> {product.brand}
            </div>
            <div className={product.inStock ? 'text-teal-400' : 'text-rose-400'}>{product.inStock ? "Em estoque" : "Fora de estoque"}</div>
            <Horizontal />
            <SetQuantity
            cartProduct={cartProduct}
            handleQtyIncrease={handleQtyIncrease}
            handleQtyDecrease={handleQtyDecrease}
            />
            <Horizontal />
            <div className="max-w-[300px]">
                <Button label="Adicionar ao Carrinho" onClick={() => handleAddProductToCart(cartProduct)} />
            </div>
        </div>
    </div>; 
};
 
export default ProductDetails;