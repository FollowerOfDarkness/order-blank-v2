import { BaseQueryFn, FetchArgs, FetchBaseQueryError, createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.NEXT_PUBLIC_API_PATH,
  prepareHeaders: headers => {
    headers.set("Authorization", `Bearer ${localStorage.getItem("accessToken")}`);
  },
  credentials: "include",
});

const baseQueryWithReauth: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (
  args,
  api,
  extraOptions,
) => {
  // api.dispatch(setIsSpinning(true));
  // const role = store.getState().timelineEditorSlice.auth?.role;
  // console.log("role: ", role);
  let result = await baseQuery(args, api, extraOptions);
  console.log("baseQueryWithReauth result: ", result);
  if (!role || (result.error && result.error.status === StatusCodesEnum.unauthorized)) {
    // api.dispatch(setIsRefreshLocked(true))
    if (result?.error?.status === StatusCodesEnum.unauthorized) {
      console.log("remove accessToken >>>");
      localStorage.removeItem("accessToken");
    }
    api.dispatch(setIsSpinning(true));
    // api.dispatch(setAuthIsLoading(true))
    const checkAuth = await baseQuery("auth/local/check", api, extraOptions);
    const checkAuthResult = checkAuth.data as unknown as AuthResponseType;
    console.log("checkAuthResult: ", checkAuthResult);
    if (checkAuthResult?.statusCode === StatusCodesEnum.ok && checkAuthResult?.body) {
      api.dispatch(
        setAuth({
          isLoading: false,
          statusCode: checkAuthResult.statusCode ? checkAuthResult.statusCode : StatusCodesEnum.unauthorized,
          role: checkAuthResult?.body.role,
          worker: checkAuthResult?.body.worker,
        }),
      );
      result = await baseQuery(args, api, extraOptions);
    } else if (!store.getState().timelineEditorSlice.isRefreshLocked) {
      api.dispatch(setIsRefreshLocked(true));
      const refreshTokens = await baseQuery("auth/local/refresh", api, extraOptions);
      const refreshTokensResult = refreshTokens.data as unknown as AuthResponseType;
      console.log("refreshTokensResult result: ", refreshTokensResult);
      if (
        refreshTokensResult?.statusCode === StatusCodesEnum.ok &&
        refreshTokensResult?.body.accessToken &&
        refreshTokensResult?.body.role
      ) {
        api.dispatch(
          setAuth({
            isLoading: false,
            statusCode: refreshTokensResult?.statusCode ? refreshTokensResult.statusCode : StatusCodesEnum.unauthorized,
            role: refreshTokensResult?.body.role,
            worker: refreshTokensResult.body.worker,
          }),
        );
        console.log("set tokens >>>>");
        localStorage.setItem("accessToken", refreshTokensResult?.body.accessToken as string);
        result = await baseQuery(args, api, extraOptions);
      } else {
        api.dispatch(
          setAuth({
            isLoading: false,
            statusCode: StatusCodesEnum.unauthorized,
            role: undefined,
            worker: undefined,
          }),
        );
        console.log("remove tokens >>>>");
        localStorage.removeItem("accessToken");
      }
      api.dispatch(setIsRefreshLocked(false));
    }
  } else if ((result?.data as ServerResponseType).statusCode === StatusCodesEnum.forbidden) {
    api.dispatch(
      setAuth({
        isLoading: false,
        statusCode: StatusCodesEnum.forbidden,
        role,
        worker: undefined,
      }),
    );
  }
  api.dispatch(setIsSpinning(false));
  return result;
};

export const api = createApi({
  reducerPath: "api",
  baseQuery,
  endpoints: () => ({}),
});
