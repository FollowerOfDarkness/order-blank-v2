import { configureStore } from '@reduxjs/toolkit'

import { loginApi } from '@/features/login/api/login.api'
import { api } from '@/shared/api'

export const makeStore = () => {
	return configureStore({
		reducer: {
			[api.reducerPath]: api.reducer,
			[loginApi.reducerPath]: loginApi.reducer
		},
		middleware: getDefaultMiddleware =>
			getDefaultMiddleware().concat([api.middleware, loginApi.middleware])
	})
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
