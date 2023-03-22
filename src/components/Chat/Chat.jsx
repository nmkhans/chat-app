import React from "react";
import { useParams } from "react-router-dom";
import { useGetMessagesQuery } from "../../redux/api/messagesApi";
import ChatHead from "../ChatHead/ChatHead";
import Messages from "../Messages/Messages";
import Options from "../Options/Options";
import Error from "./../Error/Error";

const Chat = () => {
  const { id } = useParams();
  const {
    data: messages,
    isLoading,
    isError,
    error,
  } = useGetMessagesQuery(id);

  //? render desicion
  let content = null;

  if (isLoading) content = <div>Loading...</div>;

  if (!isLoading && isError)
    content = (
      <div>
        <Error message={error?.data} />
      </div>
    );

  if (!isLoading && !isError && messages.length === 0)
    content = <div>No Messages available!</div>;

  if (!isLoading && !isError && messages.length > 0)
    content = (
      <>
        <ChatHead message={messages[0]} />
        <Messages messages={messages} />
        <Options />
      </>
    );

  return (
    <div className="w-full lg:col-span-2 lg:block">
      <div className="w-full grid conversation-row-grid">
        {content}
      </div>
    </div>
  );
};

export default Chat;
