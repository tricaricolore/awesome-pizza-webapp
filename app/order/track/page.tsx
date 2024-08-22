"use client";

import useCustomerTrackPageHook from "@/app/order/track/page-hook";
import TableOrderComponent from "@/components/table-order/table-order.component";
import { Button, TextField, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";

const Page = () => {

    const { getOrderResponse, register, onSubmit, errors, isLoading } = useCustomerTrackPageHook();

    return (
        <>
            <Grid marginBottom={4} textAlign={"end"}>
                <Button variant="contained" href="/order">
                    Torna agli ordini
                </Button>
            </Grid>
            <form onSubmit={onSubmit}>
                <Typography variant={"h5"} marginBottom={2}>Traccia il tuo ordine</Typography>
                <Grid container spacing={4}>
                    <Grid item xs={4}>
                        <TextField {...register("code", { required: true, })} label="Codice" fullWidth />
                        {errors.code && <Typography color={"red"}>Questo campo è obbligatorio</Typography>}
                    </Grid>
                </Grid>
                <Grid marginTop={2}>
                    <Button type={"submit"} variant={"contained"}>
                        Traccia
                    </Button>
                </Grid>
                {getOrderResponse && (
                    <TableOrderComponent readonly orders={{
                        orders: [getOrderResponse]
                    }} />
                )}
            </form>
        </>
    );
};

export default Page;
