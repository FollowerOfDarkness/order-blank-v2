import { createApi } from '@reduxjs/toolkit/query/react'

import { baseQuery } from '@/shared/api/'

// export const loginApi = api.injectEndpoints({
//   endpoints: builder => ({
//     signin: builder.mutation<any, { email: string; password: string }>({
//       query: data => ({
//         body: data,
//         url: "auth/login",
//         method: "POST",
//       }),
//     }),
//   }),
// });
// export const baseQuery = fetchBaseQuery({
// 	baseUrl: process.env.NEXT_PUBLIC_API_PATH,
// 	prepareHeaders: headers => {
// 		headers.set(
// 			'Authorization',
// 			`Bearer ${localStorage.getItem('accessToken')}`
// 		)
// 	},
// 	credentials: 'include'
// })

export const loginApi = createApi({
	reducerPath: 'loginApi',
	baseQuery,
	endpoints: builder => ({
		signin: builder.mutation<any, { email: string; password: string }>({
			query: data => ({
				body: data,
				url: 'auth/login',
				method: 'POST'
			})
		})
	})
})

export const { useSigninMutation } = loginApi
