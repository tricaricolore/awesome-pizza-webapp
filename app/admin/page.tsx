"use client";

import TableOrderComponent from "@/components/table-order/table-order.component";
import { Button, Grid } from "@mui/material";
import useAdminPageHook from "./page-hook";

const Page = () => {

    const { upsertOrder, searchOrder, searchOrderResponse, hasTakenOrder, isLoading } = useAdminPageHook();

    const updateOrder = (id: string | undefined, status: string | null | undefined) => {
        upsertOrder({
            id,
            status
        }).unwrap().then((response) => {
            if (response.status) {
                searchOrder({});
            }
        });
    };

    if (!searchOrderResponse || isLoading.search) {
        return <>Loading...</>;
    }

    return (
        <>
            <Grid marginBottom={4} textAlign={"end"}>
                <Button variant="contained" href="/">
                    Torna alla Homepage
                </Button>
            </Grid>
            <TableOrderComponent orders={searchOrderResponse} hasTakenOrder={hasTakenOrder} updateOrder={updateOrder} readonly={false} />
        </>
    );
};

export default Page;
