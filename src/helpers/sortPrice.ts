import { IProduct } from "../types/product";

export const sortPrice = (a: IProduct, b: IProduct) => {
    let aN = a.price.match(/\d/g) ?? [];
    let bN = b.price.match(/\d/g) ?? [];

    return +aN.join('') - +bN.join('');
};
