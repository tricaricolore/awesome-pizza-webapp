import { OrderDtoRead } from "@/api/src/generated";
import PillStatus from "@/components/pill-status/pill-status.component";
import { TableOrderProps } from "@/components/table-order/table-order.props";
import OrderStatusEnum from "@/enum/OrderStatusEnum";
import CheckIcon from '@mui/icons-material/Check';
import DeleteIcon from '@mui/icons-material/Delete';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import SwipeUpAltIcon from '@mui/icons-material/SwipeUpAlt';
import { Box, Collapse, IconButton, Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material";
import React, { useState } from "react";

const OrderRow = (props: TableOrderProps & { order: OrderDtoRead; }) => {

    const { readonly, order } = props;

    const [open, setOpen] = useState<boolean>(readonly);

    return (
        <React.Fragment>
            <TableRow
                key={order.code}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
                <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row">
                    {order.code}
                </TableCell>
                <TableCell align="right">{order.creationDate}</TableCell>
                <TableCell align="right">{order.creationUser}</TableCell>
                <TableCell align="right"><PillStatus code={order.status} /></TableCell>
                {!readonly && (
                    <TableCell align="right">
                        {order.status === OrderStatusEnum.Inviata && (
                            <IconButton disabled={props.hasTakenOrder}>
                                <SwipeUpAltIcon onClick={() => props.updateOrder(order.code, OrderStatusEnum.Inlavorazione)}
                                    color={props.hasTakenOrder ? "disabled" : "info"} titleAccess="Prendi in carico" />
                            </IconButton>
                        )}
                        {order.status === OrderStatusEnum.Inlavorazione && (
                            <IconButton>
                                <CheckIcon onClick={() => props.updateOrder(order.code, OrderStatusEnum.Completato)} color="success"
                                    titleAccess="Completa" />
                            </IconButton>
                        )}
                        {(order.status === OrderStatusEnum.Inlavorazione || order.status === OrderStatusEnum.Inviata) && (
                            <IconButton>
                                <DeleteIcon onClick={() => props.updateOrder(order.code, OrderStatusEnum.Eliminata)} color="error"
                                    titleAccess="Elimina" />
                            </IconButton>
                        )}
                    </TableCell>
                )}
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1 }}>
                            <Typography variant="h6" gutterBottom component="div">
                                Dettaglio Ordine
                            </Typography>
                            <Table size="small" aria-label="purchases">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Codice</TableCell>
                                        <TableCell>Alimento</TableCell>
                                        <TableCell align="right">N. di alimenti</TableCell>
                                        <TableCell align="right">Prezzo</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {order.foods?.map((elem, index) => (
                                        <TableRow key={index}>
                                            <TableCell component="th" scope="row">
                                                {elem.food?.code}
                                            </TableCell>
                                            <TableCell>{elem.food?.name}</TableCell>
                                            <TableCell align="right">{elem.amount}</TableCell>
                                            <TableCell align="right">
                                                € {Math.round((elem.amount ?? 0) * (elem.food?.price ?? 0) * 100) / 100}
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                    <TableRow>
                                        <TableCell />
                                        <TableCell />
                                        <TableCell />
                                        {order.foods && <TableCell align="right">Totale: € {order.foods.reduce((accumulator, currentValue) => accumulator + ((currentValue.food?.price ?? 0) * (currentValue.amount ?? 0)), 0)}</TableCell>}
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>

        </React.Fragment>
    );
};

export default OrderRow;
