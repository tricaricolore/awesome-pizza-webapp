"use client";

import useAdminHook from "./page-hook";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import Paper from '@mui/material/Paper';
import OrderRow from "./components/order-row.component";

const Admin = () => {

    const { upsertOrder, searchOrder, searchOrderResponse, hasTakenOrder, isLoading } = useAdminHook();

    const updateOrder = (id: string | undefined, status: string | null | undefined) => {
        upsertOrder({
            id,
            status
        }).unwrap().then((response) => {
            if (response.status) {
                searchOrder({});
            }
        });
    }

    return (
        <>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell />
                            <TableCell>Codice Ordine</TableCell>
                            <TableCell align="right">Data ordine</TableCell>
                            <TableCell align="right">Cliente ordine</TableCell>
                            <TableCell align="right">Status</TableCell>
                            <TableCell align="right">Azioni</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {searchOrderResponse?.orders?.map((order, index) =>
                            <OrderRow key={index} order={order} updateOrder={updateOrder} hasTakenOrder={hasTakenOrder} />
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

export default Admin;