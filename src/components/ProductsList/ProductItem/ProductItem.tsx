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
                <img src="https://github.com/musovvir/images/blob/main/cart.png?raw=true" alt="" onClick={() => addProduct(product)}/>
                <img src="https://github.com/musovvir/images/blob/main/like.png?raw=true" alt=""/>
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
