"use client";

import useLookupHook from "@/hooks/lookup-hook";
import useOrderHook from "@/hooks/order-hook";
import { useEffect } from "react";

const useAdminHook = () => {

    const {
        searchOrder,
        searchOrderResponse,
        isLoadingOrder
    } = useOrderHook();

    useEffect(() => {
        searchOrder({});
    }, [])

    return {
        searchOrderResponse,

        isLoading: {
            initial: false,
            search: isLoadingOrder
        }
    }
}

export default useAdminHook;