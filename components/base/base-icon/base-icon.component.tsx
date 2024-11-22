import Icon from "@mui/material/Icon";
import SvgIcon from "@mui/material/SvgIcon";

type IconComponentType = typeof SvgIcon;

interface IProps {
    readonly icon: IconComponentType;
    readonly hoverTitle?: string;
}

const BaseIcon = (props: IProps) => {

    const { icon, hoverTitle } = props;

    return (
        <Icon component={icon} fontSize="inherit" titleAccess={hoverTitle} />
    );
};

export default BaseIcon;
export type { IProps as BaseIconProps, IconComponentType };
