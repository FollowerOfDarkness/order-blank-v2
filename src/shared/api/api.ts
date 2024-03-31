import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.NEXT_PUBLIC_API_PATH,
  prepareHeaders: headers => {
    headers.set("Authorization", `Bearer ${localStorage.getItem("accessToken")}`);
  },
  credentials: "include",
});

export const api = createApi({
  reducerPath: "api",
  baseQuery,
  endpoints: () => ({}),
});
