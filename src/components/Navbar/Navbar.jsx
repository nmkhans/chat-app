import React from "react";
import logo from "../../assets/lws-logo-dark.svg";
import { useDispatch } from "react-redux";
import { userLoggedOut } from "../../redux/reducer/authSlice/authSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(userLoggedOut());
    localStorage.clear();
  };

  return (
    <nav className="border-general sticky top-0 z-40 border-b bg-violet-700 transition-colors">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between h-16 items-center">
          <img className="h-10" src={logo} />
          <ul>
            <li className="text-white">
              <span className="cursor-pointer" onClick={handleLogout}>
                Logout
              </span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
