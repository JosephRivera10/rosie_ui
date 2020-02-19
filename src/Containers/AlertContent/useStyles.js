import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  title: {
    display: 'flex',
    flexDirection: 'column',
    flexBasis: '100%',
    flex: '1',
    alignItems: 'end',
    color: theme.palette.text.dark,
  },
  column: {
    display: 'flex',
    flexDirection: 'row',
    flex: '1',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    'color': '#30aadd',
    '&:hover': {
      backgroundColor: '#eaf0f2',
    },
  },
  expandOpen: {
    transform: 'rotate(180deg)',
    'color': '#30aadd',
    '&:hover': {
      backgroundColor: '#eaf0f2',
    },
  },
  imageStyle: {
    height: '150px',
    width: '150px',
  },
  cardButtons: {
    justifyContent: 'flex-end',
    width: 'fit-content',
    position: 'relative',
    bottom: '50px',
    left: '475px',
  },
  card: {
    color: '#272b34',
  },
  button: {
    'color': '#30aadd',
    '&:hover': {
      backgroundColor: '#eaf0f2',
    },
  },
  cardContent: {
    paddingTop: '0px',
    paddingBottom: '0px !important',
    height: '230px'
  },
  innerCardContent: {
    padding: '5px 0px 0px 0px',
    paddingBottom: '0px !important',
  },
}));

export default useStyles;
