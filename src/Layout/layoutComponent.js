import React from "react";
import Navbar from "../Components/Navbar";
import Home from "../Pages/Home";

const LayoutComponent = (props) => {
  return (
    <>
      <Navbar />
      {props.children}
      
    </>
  );
};

export default LayoutComponent;
