import { configureStore } from "@reduxjs/toolkit";
import { CryptoApi } from "../services/cryptoApi";
import { CryptoNewsApi } from "../services/cryptoNewsApi";
export default configureStore ({
    reducer:{
        [CryptoApi.reducerPath]: CryptoApi.reducer,
        [CryptoNewsApi.reducerPath]: CryptoNewsApi.reducer,
    }
})