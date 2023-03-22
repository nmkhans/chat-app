import React from "react";
import { useSelector } from "react-redux";
import gravatarUrl from "gravatar-url";

const ChatHead = ({ message }) => {
  const { user } = useSelector((state) => state.auth) || {};
  const { sender, reciver } = message || {};

  const partnerEmail =
    sender.email === user.email ? reciver.email : sender.email;
  const partnerName =
    sender.email === user.email ? reciver.name : sender.name;

  return (
    <div className="relative flex items-center p-3 border-b border-gray-300">
      <img
        className="object-cover w-10 h-10 rounded-full"
        src={gravatarUrl(partnerEmail, {
          size: 80,
        })}
        alt={partnerName}
      />
      <span className="block ml-2 font-bold text-gray-600">
        {partnerName}
      </span>
      <span className="absolute w-3 h-3 bg-green-600 rounded-full left-10 top-3"></span>
    </div>
  );
};

export default ChatHead;
