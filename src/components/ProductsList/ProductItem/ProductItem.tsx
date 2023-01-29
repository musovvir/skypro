import React from 'react';
import { IProduct } from "../../../types/product";
import cls from './ProductItem.module.scss';

interface ProductItemProps {
    product: IProduct;
    addProduct: (value: IProduct) => void;
}

const ProductItem = ({ product, addProduct }: ProductItemProps) => {
    const { title, subTitle, price, image } = product;
    return (
        <div className={cls.productItem}>
            <div className={cls.icons}>
                <img src="./images/cart.png" alt="" onClick={() => addProduct(product)}/>
                <img src="./images/like.png" alt=""/>
            </div>
            <img src={image} alt="ff" width="379" height="250"></img>
            <div className={cls.title}>
                {title}
            </div>
            <div className={cls.subTitle}>
                {subTitle}
            </div>
            <div className={cls.price}>
                {price}
            </div>
        </div>
    );
};

export default ProductItem;
