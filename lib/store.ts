import { configureStore } from "@reduxjs/toolkit";
import { cakeApi } from "@/services/cakeApi";
import { authApi } from "@/services/authApi";

export const makeStore = () => {
  return configureStore({
    reducer: {
      [cakeApi.reducerPath]: cakeApi.reducer,
      [authApi.reducerPath]: authApi.reducer,
    },

    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(cakeApi.middleware, authApi.middleware),
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
