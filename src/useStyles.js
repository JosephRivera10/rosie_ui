import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  app: {
    textAlign: 'center',
    backgroundColor: '#282c34',
    minHeight: '100vh',
    fontFamily: ['Roboto', 'sans-serif', 'Noto'].join(','),
  },
  appHeader: {
    display: 'flex',
    color: 'white',
  },
  backButton: {
    'color': '#30aadd !important',
    '&:hover': {
      backgroundColor: '#eaf0f2',
    },
  },
  cardContent: {
    paddingTop: '0px',
    paddingBottom: '0px !important',
  },
  innerCardContent: {
    padding: '5px 0px 0px 0px',
    paddingBottom: '0px !important',
  },
  headerItem: {
    textAlign: 'left',
    alignSelf: 'center',
  },
  progressBar: {
    color: '#30aadd',
  },
  logo: {
    height: '240px',
    width: '400px',
  },
  warningIcon: {
    color: '#30aadd',
  },
  areaTypeHeader: {
    color: '#fff',
  },
  areaTypeIcons: {
    width: '75px',
    height: '75px',
    paddingTop: '15px',
  },
  iconWrapper: {
    width: '100px',
    height: '100px',
    backgroundColor: '#30aadd',
    borderRadius: '50%',
  },
  iconContainer: {
    marginTop: '17%',
    justifyContent: 'space-evenly',
  },
}));

export default useStyles;
