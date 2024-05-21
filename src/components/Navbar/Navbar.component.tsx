import { useLocation, useNavigate } from 'react-router-dom';

import { AppBar, Box, Button, Typography } from '@mui/material';

import NavLogo from '@assets/extras/nav-logo.svg';
import { ROUTES } from '@constants/routes.constant';

import { useStyles } from './Navbar.styles';

export const Navbar = () => {
  /** Hooks */
  const location = useLocation();
  const { classes } = useStyles();
  const navigate = useNavigate();

  return (
    <Box position='sticky' top={0} left={0}>
      <AppBar className={classes.navbarRoot} elevation={0}>
        <Box display='flex' flexDirection='row' gap={32}>
          {Object.entries(ROUTES).map((item) => {
            return (
              <Typography
                fontWeight={location.pathname === item[1] ? 500 : 300}
                className={classes.navbarText}
                onClick={() => navigate(item[1])}
              >
                {item[0]}
              </Typography>
            );
          })}
        </Box>
        <Box>
          <img src={NavLogo} alt='nav-logo' height={70} width={70} />
        </Box>
        <Box>
          <Button className={classes.resumeButton}>View Resume</Button>
        </Box>
      </AppBar>
    </Box>
  );
};
