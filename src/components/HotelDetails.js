import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

import HotelHeader from "./HotelHeader";
import Description from "./Description";
import Details from "./Details";
import Address from "./Address";
import Map from "./Map";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  }
}));

export default function HotelDetails(props) {
  const data = props.data;
  const {
    name,
    code,
    starRating,
    price,
    phoneNumber,
    location,
    media,
    description,
    details
  } = data;
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function getImage(data, type) {
    var toRet = "";
    if (data.length) {
      toRet = data.find(item => item["type"] === type).href;
    }
    return toRet;
  }

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <div className={classes.root}>
      <HotelHeader data={data} triggerEvent={handleChange}/>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} variant="fullWidth">
          <Tab label="Description" {...a11yProps(0)} />
          <Tab label="Details" {...a11yProps(1)} />
          <Tab label="Location" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Description str={description} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Details data={details} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Box display="flex" flexDirection="column">
          <Address data={location} />
          <Map
            latitude={location.latitude}
            longitude={location.longitude}
            img={getImage(media, "productMap")}
          />
        </Box>
      </TabPanel>
    </div>
  );
}
