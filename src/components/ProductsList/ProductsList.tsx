import React from 'react';
import { IProduct } from "../../types/product";
import ProductItem from "./ProductItem/ProductItem";
import cls from './ProductsList.module.scss';

interface ProductsListProps {
    products: IProduct[];
    addProduct: (value: IProduct) => void;
}

const ProductsList = ({ products, addProduct }: ProductsListProps) => {

    return (
        <div className={cls.productsList}>
            {products.map(item => <ProductItem key={item.id} product={item} addProduct={addProduct} />)}
        </div>
    );
};

export default ProductsList;
