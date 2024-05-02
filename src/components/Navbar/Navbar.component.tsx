import { useNavigate } from 'react-router-dom';

import { useScrollTrigger, AppBar, Box, Button, Typography, Slide } from '@mui/material';

import { ROUTES } from '@constants/routes.constant';

import { useStyles } from './Navbar.styles';
import { AppBarProps } from './Navbar.types';

const HideOnScroll = (props: AppBarProps) => {
  const { children, window } = props;

  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction='down' in={!trigger}>
      {children ?? <></>}
    </Slide>
  );
};

export const Navbar = (props: AppBarProps) => {
  const {
    classes,
    theme: { spacing },
  } = useStyles();
  const navigate = useNavigate();

  return (
    <HideOnScroll {...props}>
      <AppBar className={classes.navbarRoot} elevation={0}>
        <Box display='flex' flexDirection='row'>
          <Typography
            mr={spacing(48)}
            fontWeight={500}
            className={classes.navbarText}
            onClick={() => navigate(ROUTES.home)}
          >
            Work
          </Typography>
          <Typography
            fontWeight={300}
            className={classes.navbarText}
            onClick={() => navigate(ROUTES.about)}
          >
            About
          </Typography>
        </Box>
        <Box>
          <Button className={classes.resumeButton}>View Resume</Button>
        </Box>
      </AppBar>
    </HideOnScroll>
  );
};
