import { api } from "@/shared/api";

export const loginApi = api.injectEndpoints({
  endpoints: builder => ({
    signin: builder.mutation({
      query: data => ({
        body: data,
        url: "/auth/signin",
        method: "POST",
      }),
    }),
  }),
});

export const { useSigninMutation } = loginApi;
