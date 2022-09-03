import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_COIN_MARKET_API_HOST}`,
  }),
  endpoints: (builder) => ({
    getCryptoList: builder.query({
      query: (limit = 30) => ({
        url: `/coins?limit=${limit}`,
        headers: {
          "x-rapidapi-host": "coinranking1.p.rapidapi.com",
          "x-rapidapi-key": `${process.env.NEXT_PUBLIC_COIN_MARKET_API_KEY}`,
        },
      }),
    }),
  }),
});

export default api;

export const { useGetCryptoListQuery } = api;
