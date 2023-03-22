import React from "react";
import Message from "./../Message/Message";
import { useSelector } from "react-redux";

const Messages = ({ messages }) => {
  const { user } = useSelector((state) => state.auth);

  return (
    <div className="relative w-full p-6 overflow-y-auto">
      <ul className="space-y-2">
        {messages
          .slice()
          .sort((a, b) => a.timestamp - b.timestamp)
          .map((message) => {
            const {
              message: lastMessage,
              sender,
              id,
            } = message || {};

            return (
              <Message
                key={id}
                justify={
                  sender.email === user?.email ? "end" : "start"
                }
                message={lastMessage}
              />
            );
          })}
      </ul>
    </div>
  );
};

export default Messages;
