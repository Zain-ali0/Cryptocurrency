import { createApi , fetchBaseQuery } from "@reduxjs/toolkit/query/react";


const cryptoApiHeaders = {
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
    'X-RapidAPI-Key': '697609c6dcmsh3293867677cbbebp13846bjsnbc13f50d975a'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com';

const createRequest = (url) => ({url , headers:cryptoApiHeaders})

export const CryptoApi = createApi({
    reducerPath:'cryptoApi',
    baseQuery:fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptos:builder.query({
            query:(count) => createRequest(`/coins?limit=${count}`),
        }),
        getCryptoDetails: builder.query({
            query:(coinId) => createRequest(`/coin?limit=${coinId}`),
            }),
    })
})


export const  {  useGetCryptosQuery ,  useGetCryptoDetailsQuery} = CryptoApi;


