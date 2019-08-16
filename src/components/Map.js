import React from "react";
import Box from "@material-ui/core/Box";

export default function Map(props) {
  const { latitude, longitude, img } = props;

  return (
    <Box display="flex" alignItems="center">
      <a
        href={
          "https://maps.google.com/maps?q=" +
          latitude +
          "," +
          longitude +
          "&hl=en;z=14"
        }
        target="_blank"
      >
        <img src={img} alt="map picture" />
      </a>
    </Box>
  );
}
