import { BaseIconProps } from "../base-icon/base-icon.component";

type RedirectAction = {
    text: string;
    redirect: string;
};

interface IProps {
    title: string;
    icon?: BaseIconProps;
    imageUrl?: string;
    description?: string;
    action?: JSX.Element;
}

export type { IProps as BaseCardProps, RedirectAction };
