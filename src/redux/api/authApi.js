import { userLoggedIn } from "../reducer/authSlice/authSlice";
import api from "./api";

export const authApi = api.injectEndpoints({
  endpoints: builder => ({
    register: builder.mutation({
      query: (data) => ({
        url: "/register",
        method: "POST",
        body: data
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const response = await queryFulfilled;

          localStorage.setItem("auth", JSON.stringify({
            accessToken: response.data.accessToken,
            user: response.data.user
          }))

          dispatch(userLoggedIn({
            accessToken: response.data.accessToken,
            user: response.data.user
          }))
        } catch (error) { }
      }
    }),
    login: builder.mutation({
      query: (data) => ({
        url: "/login",
        method: "POST",
        body: data
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const response = await queryFulfilled;

          localStorage.setItem("auth", JSON.stringify({
            accessToken: response.data.accessToken,
            user: response.data.user
          }))

          dispatch(userLoggedIn({
            accessToken: response.data.accessToken,
            user: response.data.user
          }))
        } catch (error) { }
      }
    }),
  })
})

export const { useRegisterMutation, useLoginMutation } = authApi;