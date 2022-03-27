import React from "react";
import { Link } from "react-router-dom";

const RouterLink = ({ children, ...props }) => {
  return <Link style={{textDecoration:'none',color:'black'}} {...props}>{children}</Link>;
};

export default RouterLink;
