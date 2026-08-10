import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Cake } from "@/app/types/cake.types";

export const cakeApi = createApi({
  reducerPath: "cakeApi",

  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL,
  }),

  tagTypes: ["Cake"],

  endpoints: (builder) => ({
    getCakes: builder.query<Cake[], void>({
      query: () => "/cakes",
      providesTags: ["Cake"],
    }),

    getCakesById: builder.query({
      query: (id) => `/cakes/${id}`,
      providesTags: ["Cake"],
    }),

    createCake: builder.mutation({
      query: (newCake) => ({
        url: "/cakes",
        method: "POST",
        body: newCake,
      }),
      invalidatesTags: ["Cake"],
    }),

    deleteCake: builder.mutation({
      query: (id) => ({
        url: `/cakes/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Cake"],
    }),
  }),
});

export const {
  useGetCakesQuery,
  useGetCakesByIdQuery,
  useCreateCakeMutation,
  useDeleteCakeMutation,
} = cakeApi;
