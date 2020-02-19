import { makeStyles } from '@material-ui/core/styles';
import { amber, green } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  icon: {
    fontSize: 20,
  },
  iconType: {
    opacity: 0.9,
    marginRight: theme.spacing(1),
  },
  error: {
    backgroundColor: theme.palette.error.dark,
  },
  info: {
    backgroundColor: theme.palette.primary.main,
  },
  message: {
    display: 'flex',
    alignItems: 'center',
  },
  success: {
    backgroundColor: green[600],
  },
  warning: {
    backgroundColor: amber[700],
  },
}));

export default useStyles;
