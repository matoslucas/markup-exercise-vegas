import React from "react";
import Box from "@material-ui/core/Box";
import Collapse from "@material-ui/core/Collapse";
import Link from "@material-ui/core/Link";


function renderDetails(data) {
  return data.map((item, index) => {
    return (
      <Box key={item + index}>
        <strong>{item.label}:</strong>
        <p>{item.value}</p>
      </Box>
    );
  });
}

export default function Details(props) {
  const [expanded, setExpanded] = React.useState(false);

  function handleExpandClick() {
    setExpanded(!expanded);
  }
  const buttonText = expanded
    ? "hide more details"
    : "view more details";
  const icon = expanded ? <span>&#x2191;</span> : <span>&#x2193;</span>;

  return (
    <Box display="flex" flexDirection="column">
      {renderDetails(props.data.slice(0, 2))}

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        {renderDetails(props.data.slice(2))}
      </Collapse>
      <Link component="a" onClick={handleExpandClick}>
        <Box display="flex" alignItems="center">
          {buttonText.toUpperCase()}
          &nbsp;
          {icon}
        </Box>
      </Link>
    </Box>
  );
}
