import React from "react";

const PortfolioPage = props => (
  <div>
    {console.log(props)}
    <h2>Thing {props.match.params.id}</h2>
  </div>
);

export default PortfolioPage;
