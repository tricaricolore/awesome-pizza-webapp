import { ServiceApi } from "@/api/src/enhanced";

const useLookupHook = () => {

    const [statusGet, { data: statusResponse, isLoading: statusLoading }] = ServiceApi.useLazyGetLookupStatusQuery();
    const statusGetPrivate = () => {
        statusGet(undefined, true);
    };

    return {
        statusGet: statusGetPrivate,
        statusResponse,

        isLoadingLookup: statusLoading
    };
};

export default useLookupHook;
