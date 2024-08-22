import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

interface IProps {
    isActive: boolean;
}

const BaseLoader = (props: React.PropsWithChildren<IProps>) => {

    const { isActive, children } = props;

    if (isActive) {
        return (
            <Backdrop
                open
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
        );
    }

    return (
        <>{children}</>
    );
};

export default BaseLoader;
