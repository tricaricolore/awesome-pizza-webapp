"use client";

import OrderTrack from "@/app/order/track/page-model";
import useOrderHook from "@/hooks/order.hook";
import { useForm } from "react-hook-form";

const useCustomerTrackPageHook = () => {

    const { getOrder, getOrderResponse, isLoadingOrder } = useOrderHook();

    const { register, getValues, handleSubmit, formState: { errors } } = useForm<OrderTrack>();
    const onSubmitPrivate = () => {
        getOrder(getValues("code"));
    };

    return {
        getOrderResponse,

        register,
        onSubmit: handleSubmit(onSubmitPrivate),
        errors,

        isLoading: isLoadingOrder
    };
};

export default useCustomerTrackPageHook;
