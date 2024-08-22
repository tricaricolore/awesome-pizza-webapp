"use client";

import useOrderHook from "@/hooks/order.hook";
import { useEffect, useMemo } from "react";

const useAdminPageHook = () => {

    const {
        upsertOrder,
        upsertOrderResponse,
        searchOrder,
        searchOrderResponse,
        isLoadingOrder
    } = useOrderHook();

    const {
        searchOrder: searchTakenOrder,
        searchOrderResponse: searchTakenOrderResponse,
        isLoadingOrder: isLoadingTakenOrder
    } = useOrderHook();

    const hasTakenOrder = useMemo(() => (searchTakenOrderResponse?.orders && searchTakenOrderResponse.orders.length > 0) ?? false, [searchTakenOrderResponse]);

    useEffect(() => {
        searchOrder({});
    }, []);

    useEffect(() => {
        searchTakenOrder({ status: "ILA" });
    }, [searchOrderResponse]);

    return {
        hasTakenOrder,

        upsertOrder,
        upsertOrderResponse,

        searchOrder,
        searchOrderResponse,

        isLoading: {
            search: isLoadingOrder || isLoadingTakenOrder
        }
    };
};

export default useAdminPageHook;
