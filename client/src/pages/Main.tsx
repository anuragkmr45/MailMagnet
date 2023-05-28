import { useState, Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Box } from '@mui/material';

// components 
import Header from '../components/header';
import SideBar from '../components/sideBar';
import SuspenseLoader from '../components/common/SuspenseLoader';

const Main = () => {

    const [openDrawer, setOpenDrawer] = useState(true);

    const toggleDrawer = () => {
        setOpenDrawer(prevState => !prevState);
    }

    return (
        <>
            <Header />
            <Box>
                <SideBar toggleDrawer={toggleDrawer} openDrawer={openDrawer} />
                <Suspense fallback={<SuspenseLoader />}>
                    <Outlet context={{ openDrawer }} />
                </Suspense>
            </Box>
        </>
    )
}

export default Main;