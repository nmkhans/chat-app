import api from "./api";
import { messagesApi } from "./messagesApi";

export const conversationApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getConversations: builder.query({
      query: (email) =>
        `/conversations?participants_like=${email}&_sort=timestamp&_order=desc&_page=1&_limit=5`,
    }),
    getConversation: builder.query({
      query: ({ userEmail, participantEmail }) =>
        `/conversations?participants_like=${userEmail}-${participantEmail}&participants_like=${participantEmail}-${userEmail}`,
    }),
    addConversation: builder.mutation({
      query: ({ sender, data }) => ({
        url: "/conversations",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        //? optimistic data update

        const addConversationPatchResult = dispatch(
          api.util.updateQueryData(
            "getConversations",
            arg.sender,
            (draft) => {
              draft.push(arg.data);
            }
          )
        );

        try {
          const { data: conversation } = await queryFulfilled;

          if (conversation?.id) {
            const users = arg.data.users;
            const senderUser = users.find(
              (user) => user.email === arg.sender
            );
            const reciverUser = users.find(
              (user) => user.email !== arg.sender
            );

            dispatch(
              messagesApi.endpoints.addMessage.initiate({
                conversationId: conversation.id,
                sender: senderUser,
                reciver: reciverUser,
                message: arg.data.message,
                timestamp: arg.data.timestamp,
              })
            );
          }
        } catch (error) {
          addConversationPatchResult.undo();
        }
      },
    }),
    editConversation: builder.mutation({
      query: ({ id, data }) => ({
        url: `/conversations/${id}`,
        method: "PATCH",
        body: data,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        //? optimistic data update
        const conversationPatchResult = dispatch(
          api.util.updateQueryData(
            "getConversations",
            arg.sender,
            (draft) => {
              const draftedConversation = draft.find(
                (data) => data.id == arg.id
              );

              draftedConversation.message = arg.data.message;
              draftedConversation.timestamp = arg.data.timestamp;
            }
          )
        );

        try {
          const { data: conversation } = await queryFulfilled;

          if (conversation.id) {
            const users = arg.data.users;
            const senderUser = users.find(
              (user) => user.email === arg.sender
            );
            const reciverUser = users.find(
              (user) => user.email !== arg.sender
            );

            dispatch(
              messagesApi.endpoints.addMessage.initiate({
                conversationId: conversation.id,
                sender: senderUser,
                reciver: reciverUser,
                message: arg.data.message,
                timestamp: arg.data.timestamp,
              })
            );
          }
        } catch (err) {
          conversationPatchResult.undo();
        }
      },
    }),
  }),
});

export const {
  useGetConversationsQuery,
  useGetConversationQuery,
  useAddConversationMutation,
  useEditConversationMutation,
} = conversationApi;
