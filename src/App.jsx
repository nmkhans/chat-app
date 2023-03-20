import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Chat from "./components/Chat/Chat";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Blank from "./pages/Blank/Blank";
import Login from "./pages/Login/Login";
import Register from './pages/Register/Register';

function App() {
  const location = useLocation("/");
  
  return (
    <>
      {!["/login", "/register"].includes(location?.pathname) && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Blank />} />
          <Route path="inbox/:id" element={<Chat />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
