"use client";

import BaseCard from "@/components/base/base-card/base-card.component";
import { Button, Grid } from "@mui/material";
import Link from "@mui/material/Link";

const Page = () => {

    return (
        <>
            <Grid marginBottom={4} textAlign={"end"}>
                <Button variant="contained" href="/">
                    Torna alla Homepage
                </Button>
            </Grid>
            <Grid container spacing={2} height={"100vh"} alignItems={"center"}>
                <Grid item xs>
                    <BaseCard
                        title="Crea un ordine"
                        description="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
                        action={<Link href={`/order/create`}>Vai alla pagina</Link>}
                    />
                </Grid>
                <Grid item xs>
                    <BaseCard
                        title="Traccia un ordine"
                        description="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
                        action={<Link href={`/order/track`}>Vai alla pagina</Link>}
                    />
                </Grid>
            </Grid>
        </>
    );
};


export default Page;
