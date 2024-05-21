import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles({ name: 'Navbar' })(({ palette, spacing }) => {
  return {
    navbarRoot: {
      position: 'sticky',

      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexDirection: 'row',

      padding: spacing(16),
      paddingLeft: spacing(84),
      paddingRight: spacing(84),

      color: palette.primary.main,
      backgroundColor: palette.background.default,
    },
    navbarText: {
      cursor: 'pointer',
      fontSize: spacing(28),
      transformOrigin: 'top left',
      transition: 'all ease-in-out .5s',
      textTransform: 'capitalize',

      '&:hover': {
        transform: 'scale(1.2)',
      },
    },
    resumeButton: {
      padding: spacing(10),
      paddingLeft: spacing(24),
      paddingRight: spacing(24),

      fontSize: spacing(16),
      fontWeight: 400,
      borderRadius: spacing(32),
      textTransform: 'capitalize',
      border: `${spacing(1.6)} solid ${palette.primary.main}`,

      '&:hover': {
        backgroundColor: palette.primary.main,
        color: palette.background.default,
        boxShadow: `${palette.grey[800]} 0 ${spacing(2)} ${spacing(4)} -1px, ${palette.grey[200]} 0 ${spacing(1)} ${spacing(3)} -1px`,
      },
    },
  };
});
