import { OrderDtoRead } from "@/api/src/generated";
import { useState } from "react";
import PillStatus from "@/components/pill-status/pill-status.component";
import DeleteIcon from '@mui/icons-material/Delete';
import SwipeUpAltIcon from '@mui/icons-material/SwipeUpAlt';
import CheckIcon from '@mui/icons-material/Check';
import React from "react";
import { Box, Collapse, IconButton, Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

interface IProps {
    readonly order: OrderDtoRead;
    readonly updateOrder: (id: string | undefined, status: string | null | undefined) => void;
    readonly hasTakenOrder: boolean;
}

const OrderRow = (props: IProps) => {

    const { order, updateOrder, hasTakenOrder } = props;

    const [open, setOpen] = useState<boolean>(false);

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
                <TableCell align="right">
                    {order.status === "INV" && (
                        <IconButton disabled={hasTakenOrder}>
                            <SwipeUpAltIcon onClick={() => updateOrder(order.code, "ILA")} color={hasTakenOrder ? "disabled" : "info"} titleAccess="Prendi in carico" />
                        </IconButton>
                    )}
                    {order.status === "ILA" && (
                        <IconButton>
                            <CheckIcon onClick={() => updateOrder(order.code, "COM")} color="success" titleAccess="Completa" />
                        </IconButton>
                    )}
                    {(order.status === "ILA" || order.status === "INV") && (
                        <IconButton>
                            <DeleteIcon onClick={() => updateOrder(order.code, "ELI")} color="error" titleAccess="Elimina" />
                        </IconButton>
                    )}
                </TableCell>
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
                                        <TableCell align="right">Prezzo Totale</TableCell>
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
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>

        </React.Fragment>
    )
}

export default OrderRow;