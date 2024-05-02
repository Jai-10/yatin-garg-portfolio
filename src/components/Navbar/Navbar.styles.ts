import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles({ name: 'Navbar' })(({ palette, spacing }) => {
  return {
    navbarRoot: {
      position: 'sticky',

      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexDirection: 'row',

      padding: spacing(32),
      paddingLeft: spacing(84),
      paddingRight: spacing(84),

      color: palette.primary.main,
      backgroundColor: palette.background.default,
    },
    navbarText: {
      fontSize: spacing(24),
      cursor: 'pointer',
    },
    resumeButton: {
      padding: spacing(10),
      paddingLeft: spacing(24),
      paddingRight: spacing(24),

      fontSize: spacing(18),
      fontWeight: 400,
      borderRadius: spacing(32),
      textTransform: 'capitalize',
      letterSpacing: spacing(0.7),
      border: `${spacing(1.6)} solid ${palette.primary.main}`,

      '&:hover': {
        backgroundColor: palette.primary.main,
        color: palette.background.default,
        boxShadow: `${palette.grey[800]} 0 ${spacing(2)} ${spacing(4)} -1px, ${palette.grey[200]} 0 ${spacing(1)} ${spacing(3)} -1px`,
      },
    },
  };
});
