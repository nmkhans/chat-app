import {
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";
import { userLoggedOut } from "../reducer/authSlice/authSlice";

const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_APP_API_BASE_URL,
  prepareHeaders: async (headers, { getState, endpoint }) => {
    const token = getState()?.auth?.accessToken;

    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }

    return headers;
  },
});

const api = createApi({
  reducerPath: "api",
  baseQuery: async (args, api, extraoptions) => {
    const response = await baseQuery(args, api, extraoptions);
    if (response?.error?.status === 401) {
      api.dispatch(userLoggedOut());
      localStorage.clear();
    }

    return response;
  },
  tagTypes: [],
  endpoints: () => ({}),
});

export default api;
