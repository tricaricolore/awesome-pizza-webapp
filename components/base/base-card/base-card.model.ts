import { BaseIconProps } from "../base-icon/base-icon.component";

interface IProps {
    title: string;
    icon?: BaseIconProps;
    imageUrl?: string;
    description?: string;
    action?: {
        text: string;
        redirect: string;
    }
}

export type { IProps as BaseCardProps }