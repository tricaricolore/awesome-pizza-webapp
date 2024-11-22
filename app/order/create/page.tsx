"use client";

import useOrderCreatePageHook from "@/app/order/create/page.hook";
import BaseCard from "@/components/base/base-card/base-card.component";
import BaseLoader from "@/components/base/base-loader/base-loader.component";
import Add from '@mui/icons-material/Add';
import Remove from '@mui/icons-material/Remove';
import { Button } from "@mui/material";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

const OrderCreatePage = () => {

    const { createOrder, upsertOrderResponse, searchFoodResponse, foods, actionOnItem, isLoading } = useOrderCreatePageHook();

    return (
        <BaseLoader isActive={isLoading}>
            <Grid marginBottom={4} textAlign={"end"}>
                <Button variant="contained" href="/order">
                    Torna agli ordini
                </Button>
            </Grid>
            <Grid container xs spacing={2}>
                {
                    searchFoodResponse && (
                        searchFoodResponse.foods?.map(
                            (item, index) => (
                                <Grid
                                    item
                                    key={index}
                                    minWidth={500}
                                >
                                    <BaseCard
                                        title={item.name ?? ""}
                                        description={item.description ?? ""}
                                        action={
                                            <>
                                                <IconButton onClick={() => actionOnItem("remove", item.code)}>
                                                    <Remove />
                                                </IconButton>
                                                <Typography>{foods[item.code ?? ""] ?? 0}</Typography>
                                                <IconButton onClick={() => actionOnItem("plus", item.code)}>
                                                    <Add />
                                                </IconButton>
                                            </>
                                        }
                                    />
                                </Grid>
                            )
                        )
                    )
                }
            </Grid>
            <Grid marginTop={4} marginBottom={4}>
                <Button variant="contained" onClick={createOrder}>
                    Salva ordine
                </Button>
            </Grid>
            {
                upsertOrderResponse?.status && (
                    <Typography>Il codice del tuo ordine è: {upsertOrderResponse.detail ?? ""}</Typography>
                )
            }
        </BaseLoader>
    );
};

export default OrderCreatePage;

// "use client"

// import TextField from "@mui/material/TextField";
// import useCustomerPageHook from "./page-hook";
// import { Button, Grid, IconButton, Typography } from "@mui/material";
// import BaseCard from "@/components/base/base-card/base-card.component";
// import Add from '@mui/icons-material/Add';
// import Remove from '@mui/icons-material/Remove';

// const Page = () => {

//     const { register, handleSubmit, errors, searchFoodResponse, isLoading } = useCustomerPageHook();

//     return (
//         <form onSubmit={handleSubmit((data) => console.log(data))}>
//             <Typography variant={"h5"} marginBottom={2}>New Order</Typography>
//             <Grid container spacing={4}>
//                 <Grid item xs>
//                     <TextField {...register("address", { required: true, })} label="Address" fullWidth />
//                     {errors.address && <Typography color={"red"}>Questo campo è obbligatorio</Typography>}
//                 </Grid>
//                 <Grid item xs>
//                     <TextField {...register("phone", { required: true, })} label="Phone" fullWidth />
//                     {errors.phone && <Typography color={"red"}>Questo campo è obbligatorio</Typography>}
//                 </Grid>
//             </Grid>
//             {searchFoodResponse && (
//                 <Grid container spacing={2}>
//                     {searchFoodResponse.foods?.map((food, index) => (
//                         <Grid item key={index} marginTop={2} marginBottom={2}>
//                             <BaseCard
//                                 title={food.name ?? ""}
//                                 description={food.description ?? ""}
//                                 action={
//                                     <>
//                                         <IconButton>
//                                             <Remove />
//                                         </IconButton>
//                                         <Typography></Typography>
//                                         <IconButton>
//                                             <Add />
//                                         </IconButton>
//                                     </>
//                                 }
//                             />
//                         </Grid>
//                     ))}
//                 </Grid>
//             )}
//             <Button variant="contained" type="submit">
//                 Salva
//             </Button>
//         </form>
//     )
// }


// export default Page;
