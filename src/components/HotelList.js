import React from "react";
import Box from "@material-ui/core/Box";

function renderDetails(data) {
  return data.map((item, index) => {
    return (
      <Box key={item + index} display="flex" justifyContent="space-between">
        <span>{item.name}</span>
        <span>${item.price}</span>
      </Box>
    );
  });
}

export default function HotelList(props) {
  return (
    <Box p={1} bgcolor="#efefef" display="flex" flexDirection="column">
      {renderDetails(props.data)}
    </Box>
  );
}
