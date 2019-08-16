import React from "react";
import Box from "@material-ui/core/Box";
import Collapse from "@material-ui/core/Collapse";
import Link from "@material-ui/core/Link";

function renderDetails(data) {
  return data.map((item, index) => {
    return (
      <Box key={item + index} componnet="p">
        {item}
      </Box>
    );
  });
}

export default function Description(props) {
  const [expanded, setExpanded] = React.useState(false);

  function handleExpandClick() {
    setExpanded(!expanded);
  }

  var str = props.str.split("--");
  
  const buttonText = expanded
    ? "hide full description"
    : "show full description";
  const icon = expanded ? <span>&#x2191;</span> : <span>&#x2193;</span>;
  return (
    <Box display="flex" flexDirection="column" justifyContent="flex-start">
      {renderDetails(str.slice(0, 2))}

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        {renderDetails(str.slice(2))}
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
