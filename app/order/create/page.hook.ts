import OrderCreateModel from "@/app/order/create/page.model";
import OrderStatusEnum from "@/enum/OrderStatusEnum";
import useFoodHook from "@/hooks/food.hook";
import useOrderHook from "@/hooks/order.hook";
import { useEffect, useState } from "react";

const useOrderCreatePageHook = () => {

    const [foods, setFoods] = useState<OrderCreateModel>({});

    const { searchFood, searchFoodResponse, isLoading } = useFoodHook();
    const { upsertOrder, upsertOrderResponse, isLoadingOrder } = useOrderHook();

    const actionOnItem = (action: "plus" | "remove", code?: string | undefined) => {
        if (!code) {
            return;
        }
        let count = foods[code] ?? 0;
        if (count === 0 && action === "remove") {
            return;
        }
        setFoods({
            ...foods,
            [code]: action === "plus" ? count + 1 : action === "remove" ? count - 1 : count
        });
    };

    useEffect(() => {
        searchFood();
    }, []);

    return {
        createOrder: () => { upsertOrder({ status: OrderStatusEnum.Inviata, foods }); setFoods({}); },

        searchFoodResponse,
        upsertOrderResponse,

        foods,
        actionOnItem,



        isLoading: isLoading || isLoadingOrder
    };
};

export default useOrderCreatePageHook;
