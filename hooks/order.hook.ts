"use client";

import { ServiceApi } from "@/api/src/enhanced";
import { SearchOrderRequest, UpsertOrderRequest } from "@/api/src/generated";

const useOrderHook = () => {

    const [
        upsertOrder, {
            data: upsertOrderResponse,
            isLoading: upsertOrderLoading
        }
    ] = ServiceApi.usePutOrderUpsertMutation();
    const upsertOrderPrivate = (request: UpsertOrderRequest) => {
        return upsertOrder({
            upsertOrderRequest: request
        });
    };

    const [
        searchOrder, {
            data: searchOrderResponse,
            isLoading: searchOrderLoading
        }
    ] = ServiceApi.usePostOrderSearchMutation();
    const searchOrderPrivate = (request: SearchOrderRequest) => {
        searchOrder({
            searchOrderRequest: request
        });
    };

    const [
        getOrder, {
            data: getOrderResponse,
            isLoading: getOrderLoading
        }
    ] = ServiceApi.useLazyGetOrderGetByIdQuery();
    const getOrderPrivate = (id: string) => {
        getOrder({ id });
    };

    const [
        deleteOrder, {
            data: deleteOrderResponse,
            isLoading: deleteOrderLoading
        }
    ] = ServiceApi.useDeleteOrderDeleteByIdMutation();
    const deleteOrderPrivate = (id: string) => {
        deleteOrder({ id });
    };

    return {
        upsertOrder: upsertOrderPrivate,
        upsertOrderResponse,

        searchOrder: searchOrderPrivate,
        searchOrderResponse,

        getOrder: getOrderPrivate,
        getOrderResponse,

        deleteOrder: deleteOrderPrivate,
        deleteOrderResponse,

        isLoadingOrder: upsertOrderLoading || searchOrderLoading || getOrderLoading || deleteOrderLoading
    };
};

export default useOrderHook;
