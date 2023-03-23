import api from "./api"

export const messagesApi = api.injectEndpoints({
  endpoints: builder => ({
    getMessages: builder.query({
      query: (id) => `/messages?conversationId=${id}&_sort=timestamp&_order=desc&_page=1&_limit=5`
    }),
    addMessage: builder.mutation({
      query: (data) => ({
        url: "/messages",
        method: "POST",
        body: data
      })
    }),
  })
})

export const {
  useGetMessagesQuery,
  useAddMessageMutation
} = messagesApi;