import React from 'react';
import Catalog from "./components/Catalog/Catalog";
import Cart from "./components/Cart/Cart";
import { IProduct } from "./types/product";
import { ItemProps } from "./components/Cart/CartItem/CartItem";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "./redux/slice";
import { Route, Routes } from "react-router-dom";

function App() {
    const dispatch = useDispatch();
    const products: IProduct[] = useSelector((state: any) => state.cart.products);
    const productsInCart: ItemProps[] = useSelector((state: any) => state.cart.productsInCart);

    const onClickProduct = (value: IProduct) => {
        dispatch(addProduct(value));
    }

  return (
    <div className="App">
        <Routes>
            <Route path={'/'} element={<Catalog products={products} addProduct={onClickProduct} />} />
            <Route path={'/cart'} element={<Cart productsInCart={productsInCart} />} />
        </Routes>
    </div>
  );
}

export default App;
