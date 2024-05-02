import { Outlet } from 'react-router-dom';

import { Stack } from '@mui/material';

import { Navbar } from '@components/Navbar';

/**
 * Contains the layout/structure of the application
 * @returns - Returns the layout
 */
export const Layout = () => {
  return (
    <>
      <Navbar />
      <Stack direction='row'>
        <Outlet />
      </Stack>
    </>
  );
};
