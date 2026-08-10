import { configureStore } from "@reduxjs/toolkit";
import { cakeApi } from "@/services/cakeApi";

export const makeStore = () => {
  return configureStore({
    reducer: {
      [cakeApi.reducerPath]: cakeApi.reducer,
    },

    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(cakeApi.middleware),
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
