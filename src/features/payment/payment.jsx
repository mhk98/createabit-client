import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productPaymentApi = createApi({
  reducerPath: "productPaymentApi",
  baseQuery: fetchBaseQuery({
    // baseUrl: "http://localhost:5000/api/v1/",
    baseUrl: "http://localhost:5000/api/v1/",
  }),

  endpoints: (build) => ({
    createPayment: build.mutation({
      query: (price) => ({
        url: "/payment/create-payment-intent",
        method: "POST",
        body: price,
      }),
    }),
  }),
});

export const { useCreatePaymentMutation } = productPaymentApi;
