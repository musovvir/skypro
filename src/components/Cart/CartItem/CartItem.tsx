import React from 'react';
import cls from './CartItem.module.scss';
import { useDispatch } from "react-redux";
import { addProduct, decrementCount } from "../../../redux/slice";

export interface ItemProps {
    id: number;
    image: string;
    title: string;
    subTitle: string;
    price: string;
    count: number;
}

interface CartItemProps {
    item: ItemProps;
}

const CartItem = ({ item }: CartItemProps) => {
    const dispatch = useDispatch();

    const addIncrementCount = () => {
        if(item.count < 100) {
            dispatch(addProduct(item));
        }
    }

    const addDecrementCount = () => {
        if(item.count > 0) {
            dispatch(decrementCount(item.id));
        }
    }

    return (
        <div className={cls.cartItem}>
            <div className={cls.cart}>
                <div className={cls.divider}></div>
                <div className={cls.itemWrapper}>
                    <div className={cls.item}>
                        <img src={item.image} alt="" className={cls.img} />
                        <div className={cls.itemInfo}>
                            <div className={cls.title}>{item.title}</div>
                            <div className={cls.subTitle}>{item.subTitle}</div>
                            <div className={cls.price}>{item.price}</div>
                            <div className={cls.nav}>
                                <a href="#">Избранные</a>
                                <a href="#">Удалить</a>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className={cls.counter}>
                            <div className={cls.count}>
                                {item.count}
                            </div>
                            <div className={cls.arrows}>
                                <div className={cls.up} onClick={addIncrementCount}>
                                </div>
                                <div className={cls.down} onClick={addDecrementCount}>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItem;
