import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",

  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL,
  }),

  tagTypes: ["Auth"],

  endpoints: (builder) => ({
    signUp: builder.mutation({
      query: (newUser) => ({
        url: "/auth/signUp",
        method: "POST",
        body: newUser,
      }),

      invalidatesTags: ["Auth"],
    }),

    login: builder.mutation({
      query: (userInfo) => ({
        url: "/auth/login",
        method: "POST",
        body: userInfo,
      }),

      invalidatesTags: ["Auth"],
    }),
  }),
});

export const { useLoginMutation, useSignUpMutation } = authApi;
