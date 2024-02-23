import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const serviceDetailsApi = createApi({
  reducerPath: "serviceDetailsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://createabit-server-uao6.onrender.com/api/v1/",
  }),
  endpoints: (builder) => ({
    getServiceDetails: builder.query({
      query: (id) => `/service-details/${id}`,
    }),
  }),
});

export const { useGetServiceDetailsQuery } = serviceDetailsApi;
