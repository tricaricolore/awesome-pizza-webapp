import BaseCard from "@/components/base/base-card/base-card.component";
import Grid from "@mui/material/Grid";

const Page = () => {

    return (
        <Grid container spacing={2} height={"100vh"} alignItems={"center"}>
            <Grid item xs>
                <BaseCard
                    title="Admin"
                    imageUrl="https://blog.incibum.it/wp-content/uploads/in_pizzeria2-1024x445.jpg"
                    description="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
                    action={{
                        text: "Vai alla pagina",
                        redirect: "admin"
                    }}
                />
            </Grid>
            <Grid item xs>
                <BaseCard
                    title="Customer"
                    imageUrl="https://www.saporinostri.it/wp-content/uploads/2020/10/le-origini-della-pizza-napoletana-e1601990439881.jpg"
                    description="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
                    action={{
                        text: "Vai alla pagina",
                        redirect: "customer"
                    }}
                />
            </Grid>
        </Grid>
    );
}

export default Page;