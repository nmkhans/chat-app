import React from "react";
import Chat from "../../components/Chat/Chat";
import Conversation from "../../components/Conversation/Conversation";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div class="max-w-7xl mx-auto -mt-1">
      <div class="min-w-full border rounded flex lg:grid lg:grid-cols-3">
        <Conversation />
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
