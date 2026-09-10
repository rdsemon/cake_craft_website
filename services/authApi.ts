import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface User {
  id: string;
  name: string;
  email: string;
  image: string;
  role: string;
}

interface UserResponse {
  status: string;
  data: User;
}

interface LogoutResponse {
  status: string;
  message: string;
}

export const authApi = createApi({
  reducerPath: "authApi",

  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL,
    credentials: "include",
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

    getMe: builder.query<UserResponse, void>({
      query: () => "auth/me",
      providesTags: ["Auth"],
    }),

    logout: builder.mutation<LogoutResponse, void>({
      query: () => ({
        url: "/auth/logout",
        method: "POST",
      }),

      invalidatesTags: ["Auth"],
    }),
  }),
});

export const {
  useLoginMutation,
  useSignUpMutation,
  useGetMeQuery,
  useLogoutMutation,
} = authApi;
