import { api } from "@/shared/api/api";

export const dealerApi = api.injectEndpoints({
  endpoints: builder => ({
    getOrders: builder.query({
      query: () => "/",
    }),
    signin: builder.mutation({
      query: data => ({
        body: data,
        url: "/auth/signin",
        method: "POST",
      }),
    }),
  }),
});

export const { useSigninMutation, useGetOrdersQuery } = dealerApi;
