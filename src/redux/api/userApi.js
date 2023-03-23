import api from "./api";

export const userApi = api.injectEndpoints({
  endpoints: builder => ({
    getUser: builder.query({
      query: (email) => `/users?email=${email}`
    })
  })
})

export const { useGetUserQuery } = userApi;