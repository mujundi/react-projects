import React from "react";
import { Link } from "react-router-dom";

const PortfolioPage = () => (
  <div>
    <h2>Things I've Done</h2>
    <p>Check out my work below:</p>
    <Link to="portfolio/1">Item One</Link>
    <Link to="portfolio/2">Item Two</Link>
  </div>
);

export default PortfolioPage;
