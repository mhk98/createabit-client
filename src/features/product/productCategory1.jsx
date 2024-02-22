import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productCategory1Api = createApi({
  reducerPath: "productCategory1Api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/v1/",
  }),
  endpoints: (builder) => ({
    getProductCategory1: builder.query({
      query: () => "/product",
    }),
  }),
});

export const { useGetProductCategory1Query } = productCategory1Api;
