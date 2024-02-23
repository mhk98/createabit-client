import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productCategory2Api = createApi({
  reducerPath: "productCategory2Api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://createabit-server-uao6.onrender.com/api/v1/",
  }),
  endpoints: (builder) => ({
    getProductCategory2: builder.query({
      query: () => "/productCategory2",
    }),
  }),
});

export const { useGetProductCategory2Query } = productCategory2Api;
