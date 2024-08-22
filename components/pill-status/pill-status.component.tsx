"use client";

import useLookupHook from '@/hooks/lookup.hook';
import { Chip, ChipProps } from '@mui/material';
import { memo, useEffect, useMemo } from 'react';

interface IProps {
    code: string | null | undefined;
}

const PillStatus = memo(function PillStatus(props: IProps) {

    const { code } = props;

    const { statusGet, statusResponse, isLoadingLookup } = useLookupHook();

    useEffect(() => {
        statusGet();
    }, [statusGet]);

    const status = useMemo(() => statusResponse?.find(item => item.code === code), [code, statusResponse]);

    const pillColor: ChipProps["color"] = useMemo(() => {
        switch (code) {
            case "INV":
                return "secondary";
            case "ILA":
                return "info";
            case "COM":
                return "success";
            case "ELI":
                return "error";

            default:
                return "secondary";
        }
    }, [code]);

    return (
        <Chip label={status?.description} color={pillColor} />
    );
});

export default PillStatus;
