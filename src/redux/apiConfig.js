import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiConfig = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL,
    credentials: "include",
  }),
  endpoints: (builder) => ({
    getCurrentUser: builder.query({
      query: () => ({
        url:"/auth/me",
        method: 'GET',
      }),
    }),

    login: builder.mutation({
      query: (credentials) => ({
        url: "/auth/login",
        method: "POST",
        body: credentials,
      }),
    }),
  }),
});

export const { useGetCurrentUserQuery, useLoginMutation } = apiConfig;

export default apiConfig;
