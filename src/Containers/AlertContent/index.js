
import React, {
  useCallback,
  useState,
  useContext,
} from 'react';
import {
  Grid,
  Card,
  CardHeader,
  CardActions,
  IconButton,
  CardContent,
  Typography,
} from '@material-ui/core';
import Collapse from '@material-ui/core/Collapse';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import Carousel from 'react-material-ui-carousel';
import ShowPopupContext from '../ShowPopupContext';

import QRCode from 'qrcode.react';
import mockdata from '../../Utils/mockData';
import useStyles from './useStyles';

const AlertCard = () => {

  const classes = useStyles();
  // const { expandedId, setExpandedId } = useContext(CardExpandedContext);
  const showPopup = useContext(ShowPopupContext);

  const [expanded, setExpanded] = useState(false);
  const [data, setData] = useState(mockdata.data)

  const handleExpand = useCallback((index) => {
    setExpanded(!expanded);
  },[expanded, setExpanded])
  const unResolvedIssues = data.filter((item)=>item.resolved === false);


  const handleResolved = (id)=>{
    data.find((item)=>{
      if(item.id === id){
        item.resolved = true;
      }
    })
    setData(data)
    showPopup('success', 'Issue resolved.');
  }

  const handleEscalation = ()=>{
    showPopup('success', 'Issue escalated.');
  }

  // setData(data.filter((item)=>item.resolved === false))
  console.log(unResolvedIssues)
  return (
    <>
      <Grid
        container
        justify="center"
        align="center"
        direction="column"
      >
        {
          unResolvedIssues.map((dataObject, index) => (
          <Card
            key={dataObject.id}
            variant="outlined"
            className={classes.card}
          >
            <div
              className={classes.row}
            >
              <CardHeader
                className={classes.title}
                title={dataObject.incidentName}
              />
              <CardActions
                className={classes.column}
                disableSpacing
              >
                <IconButton
                  className={expanded ? classes.expandOpen : classes.expand}
                  onClick={() => {
                    handleExpand(index);
                  }}
                  aria-expanded={expanded}
                  aria-label="show more"
                  color="primary"
                >
                  <ExpandMoreIcon />
                </IconButton>
              </CardActions>
            </div>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent
                className={classes.cardContent}
              >
                <Grid
                container
                >
                  <Grid
                    item
                    xs={9}
                  >
                    <Carousel
                      animation="fade"
                      autoPlay={false}
                    >
                      {
                        unResolvedIssues[0].images.map((item, index) =>(
                        <Card
                          key={item.id}
                        >
                          <CardContent
                            className={classes.innerCardContent}
                          >
                              <img
                                className={classes.imageStyle}
                                src={item.image}
                                alt="roller"
                              />
                              <Typography>
                                {item.imageDescription}
                              </Typography>
                          </CardContent>
                        </Card>
                      ))
                      }
                    </Carousel>
                  </Grid>
                  <Grid
                    item
                    xs={3}
                  >
                    <QRCode
                      value={dataObject.qrCode}
                    />
                  </Grid>
                  <CardActions
                      className={classes.cardButtons}
                    >
                      <IconButton
                        aria-label="escalate"
                        className={classes.button}
                        onClick={()=>{
                          handleEscalation()
                        }}
                      >
                        <ArrowUpwardIcon />
                      </IconButton>
                      <IconButton
                        aria-label="resolved"
                        className={classes.button}
                        onClick={()=>{
                          handleResolved(dataObject.id)
                        }}
                      >
                        <CheckCircleIcon />
                      </IconButton>
                    </CardActions>
                </Grid>
              </CardContent>
            </Collapse>
          </Card>
          ))
        }
      </Grid>
    </>
  );
};

export default AlertCard;
