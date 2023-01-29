import React from 'react';
import Header from "../Header/Header";
import cls from './Cart.module.scss';
import CartItem, {ItemProps} from "./CartItem/CartItem";
import { useSelector } from "react-redux";

export interface CartProps {
    productsInCart: ItemProps[];
}

const Cart = ({ productsInCart }: CartProps) => {
    const totalPrice = useSelector((state: any) => state.cart.totalPrice);

    return (
        <div className={cls.cart}>
            <Header />
            <div className={cls.cartContent}>
                <div className={cls.content}>
                    <div className={cls.titles}>
                        <div>Товар</div>
                        <div>К-во</div>
                    </div>
                    {productsInCart.map(item => <CartItem key={item.id} item={item} />)}
                    <div className={cls.footerContent}>
                        <div className={cls.buttons}>
                            <button className={cls.clearBtn}>Очистить корзину</button>
                            <button className={cls.continueBtn}>Продолжить покупки</button>
                        </div>
                    </div>
                </div>
                <div className={cls.ordering}>
                    <div className={cls.orderTitle}>Оформление заказа</div>
                    <div className={cls.info}>
                        <div className={cls.infoCard}>
                            <div>
                                Имя Фамилия
                                <div className={cls.infoDivider}></div>
                            </div>
                            <div>
                                + 7 904 000 80 80
                                <div className={cls.infoDivider}></div>
                            </div>
                            <div>
                                Адрес доставки
                                <div className={cls.infoDivider}></div>
                            </div>
                        </div>
                    </div>
                    <div className={cls.sum}>
                        Итого: {totalPrice} руб.
                    </div>
                    <div className={cls.button}>
                        <button className={cls.btn}>
                            Оформить заказ
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
