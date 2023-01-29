import { configureStore } from "@reduxjs/toolkit";
import cart from "./slice";

export const store = configureStore({
    reducer: {
        cart,
    }
})
