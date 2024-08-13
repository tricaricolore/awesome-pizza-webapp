import { SearchOrderRequest, ServiceApiBase, UpsertOrderRequest } from "@/api/src/generated";

const useOrderHook = () => {

    const [
        upsertOrder, {
            data: upsertOrderResponse,
            isLoading: upsertOrderLoading
        }
    ] = ServiceApiBase.usePutOrderUpsertMutation();
    const upsertOrderPrivate = (request: UpsertOrderRequest) => {
        upsertOrder({
            upsertOrderRequest: request
        })
    }

    const [
        searchOrder, {
            data: searchOrderResponse,
            isLoading: searchOrderLoading
        }
    ] = ServiceApiBase.usePostOrderSearchMutation();
    const searchOrderPrivate = (request: SearchOrderRequest) => {
        searchOrder({
            searchOrderRequest: request
        })
    }

    const [
        getOrder, {
            data: getOrderResponse,
            isLoading: getOrderLoading
        }
    ] = ServiceApiBase.useLazyGetOrderGetByIdQuery();
    const getOrderPrivate = (id: string) => {
        getOrder({ id })
    }

    const [
        deleteOrder, {
            data: deleteOrderResponse,
            isLoading: deleteOrderLoading
        }
    ] = ServiceApiBase.useDeleteOrderDeleteByIdMutation();
    const deleteOrderPrivate = (id: string) => {
        deleteOrder({ id })
    }

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
    }
}

export default useOrderHook;