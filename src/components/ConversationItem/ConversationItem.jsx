import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import getPartnerName from "./../../utils/getPartnarName";
import gravatarUrl from "gravatar-url";

const ConversationItem = ({ conversation, loggedUser }) => {
  const { name, email } = getPartnerName(conversation?.users, loggedUser.email);

  return (
    <li>
      <Link to={`/inbox/${conversation.id}`}>
        <div className="flex items-center px-3 py-2 text-sm transition duration-150 ease-in-out border-b border-gray-300 cursor-pointer hover:bg-gray-100 focus:outline-none">
          <img
            className="object-cover w-10 h-10 rounded-full"
            src={gravatarUrl(email, {
              size: 80,
            })}
            alt="username"
          />
          <div className="w-full pb-2 hidden md:block">
            <div className="flex justify-between">
              <span className="block ml-2 font-semibold text-gray-600">
                {name}
              </span>
              <span className="block ml-2 text-sm text-gray-600">
                {moment(conversation.timestamp).fromNow()}
              </span>
            </div>
            <span className="block ml-2 text-sm text-gray-600">
              {conversation.message}
            </span>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default ConversationItem;
