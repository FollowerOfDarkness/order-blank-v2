import { api } from "@/shared/api/api";

export const dealerApi = api.injectEndpoints({
  endpoints: builder => ({
    getOrders: builder.query({
      query: () => "/",
    }),
    createOrder: builder.mutation({
      query: orderData => ({
        body: orderData,
        url: "/",
        method: "POST",
      }),
    }),
  }),
});

export const { useCreateOrderMutation, useGetOrdersQuery } = dealerApi;
