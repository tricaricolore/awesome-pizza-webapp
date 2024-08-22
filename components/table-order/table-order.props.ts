import { SearchOrderResponseRead } from "@/api/src/generated";

interface BaseProps {
    readonly orders: SearchOrderResponseRead;
    readonly readonly: boolean;
}

type ReadonlyProps = {
    readonly readonly: true;
};

type ActionProps = {
    readonly readonly: false;
    readonly updateOrder: (id: string | undefined, status: string | null | undefined) => void;
    readonly hasTakenOrder: boolean;
};

type IProps = BaseProps & (ReadonlyProps | ActionProps);

export type { IProps as TableOrderProps };
