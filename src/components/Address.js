import React from "react";
import Box from "@material-ui/core/Box";

export default function Address(props) {
  const {
    address,
    areaName,
    city,
    latitude,
    longitude,
    postalCode,
    state
  } = props.data;

  return (
    <Box display="flex" alignItems="center">
      <span>&#x2352;</span> {`${address} ${city} ${state} ${postalCode}`}
    </Box>
  );
}
