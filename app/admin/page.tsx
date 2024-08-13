"use client";

import BaseCard from "@/components/base/base-card/base-card.component";
import useAdminHook from "./page-hook";

const Admin = () => {

    const { searchOrderResponse, isLoading } = useAdminHook();

    return (
        <>
            {searchOrderResponse?.orders?.map((item, index) => (
                <BaseCard
                    key={index}
                    title={item.code ?? ""}
                    description={item.status ?? ""}
                />
            ))
            }
        </>
    )
}

export default Admin;