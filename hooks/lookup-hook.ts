import { ServiceApiBase } from "@/api/src/generated";

const useLookupHook = () => {

    const [statusGet, { data: statusResponse, isLoading: statusLoading }] = ServiceApiBase.useLazyGetLookupStatusQuery();

    return {
        statusGet,
        statusResponse,

        isLoadingLookup: statusLoading
    }
}

export default useLookupHook;