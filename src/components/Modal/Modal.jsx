import { useEffect, useState } from "react";
import { useGetUserQuery } from "../../redux/api/userApi";
import Error from "../Error/Error";
import checkValidEmail from "./../../utils/checkValidEmail";
import { useSelector, useDispatch } from "react-redux";
import {
  conversationApi,
  useEditConversationMutation,
  useAddConversationMutation,
} from "../../redux/api/conversationApi";

export default function Modal({ open, control }) {
  const [to, setTo] = useState("");
  const [message, setMessage] = useState("");
  const [req, setReq] = useState(false);
  const [conversation, setConversations] = useState(undefined);
  const dispatch = useDispatch();

  const { user: loggedInUser } =
    useSelector((state) => state.auth) || {};

  const { email: loggedInUserEmail } = loggedInUser || {};

  const { data: participant } = useGetUserQuery(to, {
    skip: !req,
  });

  const [
    editConversation,
    {
      data: conversationEditedData,
      isLoading: conversationEditIsLoading,
      isSuccess: conversationEditIsSuccess,
    },
  ] = useEditConversationMutation();

  const [
    addConversation,
    {
      data: conversationAddedData,
      isLoading: conversationAddIsLoading,
      isSuccess: conversationAddIsSuccess,
    },
  ] = useAddConversationMutation();

  useEffect(() => {
    if (
      participant?.length > 0 &&
      participant[0].email !== loggedInUserEmail
    ) {
      dispatch(
        conversationApi.endpoints.getConversation.initiate({
          userEmail: loggedInUserEmail,
          participantEmail: to,
        })
      )
        .unwrap()
        .then((data) => setConversations(data));
    }
  }, [participant, dispatch, loggedInUserEmail, to]);

  useEffect(() => {
    if (conversationEditIsSuccess || conversationAddIsSuccess) {
      control();
    }
  }, [conversationEditIsSuccess, conversationAddIsSuccess]);

  const handleDebounce = (fn, delay) => {
    let timeoutId;
    return (...args) => {
      clearTimeout();
      timeoutId = setTimeout(() => {
        fn(...args);
      }, delay);
    };
  };

  const doSearch = (value) => {
    if (checkValidEmail(value)) {
      setTo(value);
      setReq(true);
    }
  };

  const handleSearch = handleDebounce(doSearch, 500);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (conversation.length > 0) {
      editConversation({
        id: conversation[0].id,
        sender: loggedInUserEmail,
        data: {
          participants: `${loggedInUserEmail}-${participant[0].email}`,
          users: [loggedInUser, participant[0]],
          message,
          timestamp: new Date().getTime(),
        },
      });
    } else if (conversation.length === 0) {
      addConversation({
        sender: loggedInUserEmail,
        data: {
          participants: `${loggedInUserEmail}-${participant[0].email}`,
          users: [loggedInUser, participant[0]],
          message,
          timestamp: new Date().getTime(),
        },
      });
    }
  };

  return (
    open && (
      <>
        <div
          onClick={control}
          className="fixed w-full h-full inset-0 z-10 bg-black/50 cursor-pointer"
        ></div>
        <div className="rounded w-[400px] lg:w-[600px] space-y-8 bg-white p-10 absolute top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Send message
          </h2>
          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="to" className="sr-only">
                  To
                </label>
                <input
                  id="to"
                  name="to"
                  type="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900
                  rounded-t-md focus:outline-none focus:ring-violet-500 focus:border-violet-500 focus:z-10 sm:text-sm"
                  placeholder="Send to"
                  onChange={(e) => handleSearch(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  type="text"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-violet-500 focus:border-violet-500 focus:z-10 sm:text-sm"
                  placeholder="Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
            </div>

            <div>
              <button
                disabled={conversation === undefined}
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-violet-600 hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500"
              >
                Send Message
              </button>
            </div>

            {participant?.length === 0 && (
              <Error message="This user does not exists!" />
            )}

            {participant?.length > 0 &&
              participant[0].email === loggedInUserEmail && (
                <Error message="You can not send message to yourself!" />
              )}
          </form>
        </div>
      </>
    )
  );
}
