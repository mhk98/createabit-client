import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const serviceApi = createApi({
  reducerPath: "serviceApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://createabit-server-uao6.onrender.com/api/v1/",
  }),
  endpoints: (builder) => ({
    getServices: builder.query({
      query: () => "/service",
    }),
  }),
});

export const { useGetServicesQuery } = serviceApi;
