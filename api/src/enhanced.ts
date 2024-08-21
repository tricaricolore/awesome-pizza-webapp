import { ServiceApiBase } from "./generated";

export const ServiceApi = ServiceApiBase.enhanceEndpoints({
    addTagTypes: ["Order"],
    endpoints: {
        putOrderUpsert: {
            invalidatesTags: ["Order"]
        },
        postOrderSearch: {
            invalidatesTags: ["Order"]
        }
    }
});