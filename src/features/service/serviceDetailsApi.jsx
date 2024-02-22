import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const serviceDetailsApi = createApi({
  reducerPath: "serviceDetailsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/v1/",
  }),
  endpoints: (builder) => ({
    getServiceDetails: builder.query({
      query: (id) => `/service-details/${id}`,
    }),
  }),
});

export const { useGetServiceDetailsQuery } = serviceDetailsApi;
