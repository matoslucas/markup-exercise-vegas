import React from "react";
import Box from "@material-ui/core/Box";

import Rating from "./Rating";

export default function HotelHeader(props) {
  
  function clickHandler(e){
    //console.log('click')
    props.triggerEvent(e,2)
  }

  const {
    name,
    starRating,
    price,
    phoneNumber,
    location,
  } = props.data;
  return (
    <Box display="flex" justifyContent="space-between">
      <Box display="flex" flexDirection="column">
        <Box display="flex" alignItems="center" color="#6b717d">
          <h3>{name.toUpperCase()}</h3>
          &nbsp;
          <Rating len={starRating} />
        </Box>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          color="#6b717d"
        >
          <div onClick={clickHandler}>
            <span>&#x2352;</span> {location.areaName}{" "}
          </div>
          &nbsp;
          <div>
            <span>&#x2706;</span> <strong>{phoneNumber}</strong>
          </div>
          &nbsp;
          <div>
            <span>&#x2764;</span> Best Price Guarantee  &nbsp;
          </div>
        </Box>
      </Box>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Box component="h1" color="orange">
          ${price}
        </Box>
        <span>HOTEL ROOMS FROM</span>
      </Box>
    </Box>
  );
}
