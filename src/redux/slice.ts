import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../types/product";
import { ItemProps } from "../components/Cart/CartItem/CartItem";
import { sortPrice } from "../helpers/sortPrice";

interface initialStateProps {
    products: IProduct[];
    productsInCart: ItemProps[];
    totalPrice: number;
    sortType: string
}

const initialState: initialStateProps = {
    products: [
        {
            id: 1,
            image: 'https://github.com/musovvir/images/blob/main/image1.jpg?raw=true',
            title: 'Кровать TATRAN',
            subTitle: 'Основание из полированной нержавеющей стали, придает оригинальный парящий эффект.',
            price: '120 000 руб.',
            count: 0
        },
        {
            id: 2,
            image: 'https://github.com/musovvir/images/blob/main/image2.jpg?raw=true',
            title: 'Кресло VILORA',
            subTitle: 'Мягкое и уютное, аккуратное и стильное. Упругие подушки сиденья и приятная на ощупь ткань. ',
            price: '21 000 руб.',
            count: 0
        },
        {
            id: 3,
            image: 'https://github.com/musovvir/images/blob/main/image3.jpg?raw=true',
            title: 'Стол MENU',
            subTitle: 'Европейский дуб - отличается особой прочностью и стабильностью.',
            price: '34 000 руб.',
            count: 0
        },
        {
            id: 4,
            image: 'https://github.com/musovvir/images/blob/main/image4.jpg?raw=true',
            title: 'Диван ASKESTA',
            subTitle: 'Благодаря защелкивающемуся механизму диван легко раскладывается в комфортную кровать',
            price: '68 000 руб.',
            count: 0
        },
        {
            id: 5,
            image: 'https://github.com/musovvir/images/blob/main/image5.jpg?raw=true',
            title: 'Кресло LUNAR',
            subTitle: 'Прекрасно переносит солнечные лучи, перепады влажности и любые осадки',
            price: '40 000 руб.',
            count: 0
        },
        {
            id: 6,
            image: 'https://github.com/musovvir/images/blob/main/image6.jpg?raw=true',
            title: 'Шкаф Nastan',
            subTitle: 'Мебель может быть оснащена разнообразными системами подсветки.',
            price: '80 000 руб.',
            count: 0
        },
    ],
    productsInCart: [],
    totalPrice: 0,
    sortType: 'cheaper'
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProduct(state, action: PayloadAction<ItemProps>) {
            const findItem = state.productsInCart.find(obj => obj.id === action.payload.id);

            if(findItem) {
                findItem.count++;
            } else {
                state.productsInCart.push({
                    ...action.payload,
                    count: 1,
                });
            }

            state.totalPrice = state.productsInCart.reduce((sum, obj) => {
                let bN = obj.price.match(/\d/g) ?? 0;

                // @ts-ignore
                return +bN.join('') * obj.count + sum;
            }, 0)
        },

        decrementCount(state, action) {
            const findItem = state.productsInCart.find(obj => obj.id === action.payload);
            findItem!.count--;
            let n = findItem!.price.match(/\d/g) ?? [];
            state.totalPrice = state.totalPrice - +n.join('');
        },

        setSort: (state, action: PayloadAction<string>) => {
            state.sortType = action.payload;

            if(action.payload === 'cheaper') {
                state.products = state.products.sort((a, b) => sortPrice(a, b))
            }
            if(action.payload === 'expensive') {
                state.products = state.products.sort((a, b) => sortPrice(b, a))
            }
        },
    }
})

export const { addProduct, decrementCount, setSort } = cartSlice.actions;
export default cartSlice.reducer;
