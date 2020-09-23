// Import React components
import React from "react";
// Import Redux components

import "./Count.css";

 const Count = (props) => { 

  return (
    <div>
      <h1 className = "count">{props.item.length}</h1>
    </div>
  )
};

export default Count;