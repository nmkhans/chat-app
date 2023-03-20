import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/lws-logo-light.svg";
import { useRegisterMutation } from "../../redux/api/authApi";
import Error from "./../../components/Error/Error";

const Register = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreed: false,
  });
  const [registerError, setRegisterError] = useState("");

  const [register, { data: response, isLoading, isError, error }] =
    useRegisterMutation();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (data.password !== data.confirmPassword) {
      setRegisterError("Both password do not match!");
    } else {
      register({
        name: data.name,
        email: data.email,
        password: data.password,
      });
    }
  };

  useEffect(() => {
    if (error?.data) {
      setRegisterError(error?.data);
    }

    if (response?.accessToken && response?.user) {
      navigate("/");
    }
  }, [response, error]);

  return (
    <div className="grid place-items-center h-screen bg-[#F9FAFB">
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src={logo}
              alt="Learn with sumit"
            />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Create your account
            </h2>
          </div>
          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            <input type="hidden" name="remember" value="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="name" className="sr-only">
                  Full Name
                </label>
                <input
                  id="name"
                  name="Name"
                  type="Name"
                  autocomplete="Name"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-violet-500 focus:border-violet-500 focus:z-10 sm:text-sm"
                  placeholder="Name"
                  value={data.name}
                  onChange={(e) =>
                    setData((prev) => ({ ...prev, name: e.target.value }))
                  }
                />
              </div>

              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autocomplete="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-violet-500 focus:border-violet-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                  value={data.email}
                  onChange={(e) =>
                    setData((prev) => ({ ...prev, email: e.target.value }))
                  }
                />
              </div>

              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autocomplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-violet-500 focus:border-violet-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                  value={data.password}
                  onChange={(e) =>
                    setData((prev) => ({ ...prev, password: e.target.value }))
                  }
                />
              </div>

              <div>
                <label htmlFor="confirmPassword" className="sr-only">
                  Confirm Password
                </label>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="confirmPassword"
                  autocomplete="current-confirmPassword"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-violet-500 focus:border-violet-500 focus:z-10 sm:text-sm"
                  placeholder="confirmPassword"
                  value={data.confirmPassword}
                  onChange={(e) =>
                    setData((prev) => ({
                      ...prev,
                      confirmPassword: e.target.value,
                    }))
                  }
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-violet-600 focus:ring-violet-500 border-gray-300 rounded"
                  required
                  checked={data.agreed}
                  onChange={(e) =>
                    setData((prev) => ({ ...prev, agreed: e.target.checked }))
                  }
                />
                <label
                  htmlFor="accept-terms"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Agreed with the terms and condition
                </label>
              </div>
            </div>

            <div>
              <button
                disabled={isLoading}
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-violet-600 hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3"></span>
                Sign up
              </button>
            </div>
            <div>{registerError && <Error message={registerError} />}</div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
