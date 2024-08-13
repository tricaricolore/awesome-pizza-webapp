import { ServiceApiBase } from "@/api/src/generated";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
        [ServiceApiBase.reducerPath]: ServiceApiBase.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        immutableCheck: true,
        serializableCheck: false,
        thunk: {
            extraArgument: {

            }
        }
    })
        .concat(ServiceApiBase.middleware)
})