import OrderRow from "@/components/table-order/order-row.component";
import { TableOrderProps } from "@/components/table-order/table-order.props";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import Paper from "@mui/material/Paper";

const TableOrderComponent: React.FC<TableOrderProps> = (props: TableOrderProps) => {

    const { orders, readonly = true } = props;

    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell />
                        <TableCell>Codice Ordine</TableCell>
                        <TableCell align="right">Data ordine</TableCell>
                        <TableCell align="right">Cliente ordine</TableCell>
                        <TableCell align="right">Status</TableCell>
                        {!readonly && <TableCell align="right">Azioni</TableCell>}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {orders?.orders?.map((order, index) =>
                        <OrderRow {...props} key={index} order={order} />
                    )}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default TableOrderComponent;
