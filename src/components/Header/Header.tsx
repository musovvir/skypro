import React from 'react';
import cls from './Header.module.scss';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className={cls.header}>
            <div className={cls.title}>Интерьер.</div>
            <div className={cls.navbar}>
                <Link to={'/'} >
                    <div  className={cls.item}>
                        <div className={cls.item}>Каталог</div>
                        <img src="./images/catalog.png" alt="no" className={cls.cartIcon}/>
                    </div>
                </Link>
                <Link to={'/cart'}>
                    <div className={cls.item}>
                        <div>Корзина</div>
                        <img src="./images/cartHeader.png" alt="no" className={cls.cartIcon}/>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Header;
