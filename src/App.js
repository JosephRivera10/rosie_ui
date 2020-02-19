import React, {
  useState,
} from 'react';
import './useStyles.js';
import {
  Typography,
  IconButton,
  Grid,
  LinearProgress,
  withStyles,
} from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import WarningIcon from '@material-ui/icons/Warning';
import AlertCard from './Containers/AlertContent';
import ShowPopupContext from './Containers/ShowPopupContext';
import PopupMessage from './Containers/PopupMessage'
import logo from '../src/Utils/images/logo.png'
import Conference from './Utils/images/conference.png'
import Hallway from './Utils/images/hallway.png'
import Room from './Utils/images/room2.png'

import useStyles from './useStyles';


function App() {
  const classes = useStyles();

  const [popupDuration, setPopupDuration] = useState(4000);
  const [popupMessage, setPopupMessage] = useState('Success!');
  const [popupOpen, setPopupOpen] = useState(false);
  const [popupType, setPopupType] = useState('success');
  const [loading,setLoading] = useState(true);
  const [issue, setIssue] = useState(true);

  const handlePopup = (type, message, duration = 4000) => {
    setPopupDuration(duration);
    setPopupMessage(message);
    setPopupType(type);
    setPopupOpen(true);
  };

  const resetLoading = ()=>{
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }

  const ColorLinearProgress = withStyles({
    colorPrimary: {
      backgroundColor: '#eaf0f2',
    },
    barColorPrimary: {
      backgroundColor: '#30aadd',
    },
  })(LinearProgress);

  if (loading) {
    return (
      <div className={classes.app}>
        <img
          className={classes.logo}
          src={logo}
          aria-label="logo"
        />
        <ColorLinearProgress
          className={classes.progressBar}
        />
        {
          resetLoading()
        }
      </div>
    )
  }
  if (issue) {
    return (
      <div className={classes.app}>
        <Grid
          container
          className={classes.appHeader }>
          <Grid
            item
            xs={6}
            className={classes.headerItem}
          >
            <IconButton
              aria-label="navigate back"
              className={classes.backButton}
            >
              <ArrowBackIcon
                onClick={()=>{
                  setIssue(false)
                }}
              />
          </IconButton>
          </Grid>
          <Grid
            item
            xs={6}
            className={classes.headerItem}
          >
            <WarningIcon
              className={classes.warningIcon}
            />
          </Grid>
        </Grid>
        <ShowPopupContext.Provider value={handlePopup}>

          <AlertCard />
        </ShowPopupContext.Provider>
        <PopupMessage
          duration={popupDuration}
          message={popupMessage}
          open={popupOpen}
          setOpen={setPopupOpen}
          type={popupType}
        />
      </div>

    );
  }
  return (
    <div className={classes.app}>
      <Typography
        variant='h4'
        className={classes.areaTypeHeader}
      >
        Area Type
      </Typography>
      <Grid
        container
        className={classes.iconContainer}
      >

        <div
          className={classes.iconWrapper}
        >
          <img
            src={Hallway}
            className={classes.areaTypeIcons}
          />
        </div>

        <div
          className={classes.iconWrapper}
        >
          <img
            src={Room}
            className={classes.areaTypeIcons}
          />
        </div>


        <div
          className={classes.iconWrapper}
        >
         <img
            src={Conference}
            className={classes.areaTypeIcons}
          />
        </div>
      </Grid>
    </div>
  )

}

export default App;
