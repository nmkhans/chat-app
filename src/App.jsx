import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Chat from "./components/Chat/Chat";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Blank from "./pages/Blank/Blank";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import useAuthCheck from "./hooks/useAuthCheck";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

function App() {
  const location = useLocation("/");
  const authCheked = useAuthCheck();

  return (
    <>
      {!authCheked ? (
        <div>Authentication checking...</div>
      ) : (
        <>
          {!["/login", "/register"].includes(location?.pathname) && <Navbar />}
          <Routes>
            <Route
              path="/"
              element={
                <PrivateRoute>
                  <Home />
                </PrivateRoute>
              }
            >
              <Route index element={<Blank />} />
              <Route path="inbox/:id" element={<Chat />} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </>
      )}
    </>
  );
}

export default App;
