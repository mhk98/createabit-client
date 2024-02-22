import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const orderApi = createApi({
  reducerPath: "orderApi",
  baseQuery: fetchBaseQuery({
    // baseUrl: "http://localhost:5000/api/v1/",
    baseUrl: "http://localhost:5000/api/v1/",
  }),

  endpoints: (build) => ({
    createOrder: build.mutation({
      query: (checkoutInfo) => ({
        url: "/order/create-order",
        method: "POST",
        body: checkoutInfo,
      }),
    }),

    getAllOrder: build.query({
      query: () => ({
        url: "/order",
      }),
    }),
  }),
});

export const { useCreateOrderMutation, useGetAllOrderQuery } = orderApi;
