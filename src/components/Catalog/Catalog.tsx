import React from 'react';
import cls from './Catalog.module.scss';
import { IProduct } from "../../types/product";
import Header from "../Header/Header";
import Sort from "../Sort/Sort";
import ProductsList from "../ProductsList/ProductsList";
import {useDispatch, useSelector} from "react-redux";
import {setSort} from "../../redux/slice";

interface  CatalogProps {
    products: IProduct[];
    addProduct: (value: IProduct) => void;
}

const Catalog = ({ products, addProduct }: CatalogProps) => {
    const dispatch = useDispatch();
    const { sortType } = useSelector((state: any) => state.cart)

    const onChangeSort = (value: string) => {
        dispatch(setSort(value));
    }

    return (
        <div className={cls.catalog}>
            <Header />
            <Sort onChange={onChangeSort} value={sortType} />
            <ProductsList products={products} addProduct={addProduct} />
        </div>
    );
};

export default Catalog;
