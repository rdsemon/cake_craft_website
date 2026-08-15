import { createApi, CreateApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

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
        body: "newCAke",
      }),

      invalidatesTags: ["Auth"],
    }),
  }),
});
