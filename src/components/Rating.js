import React from "react";
import Box from "@material-ui/core/Box";

function getStars(len) {
  let toRet = [];
  for (let i = 1; i <= len; i++) {
    toRet.push(<span key={"star" + i}>&#x2605;</span>);
  }
  return toRet;
}

export default function Rating(props) {
  const r = Math.round(props.len);
  return (
    <Box display="flex" color="#979ba6">
      {getStars(r)}
    </Box>
  );
}
