import { title } from "process";
import React, { useEffect, useState } from "react";
const Headerlayout = () => {
  const headerstyle: React.CSSProperties = {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    height: "fitContents",
    alignItems: "center",
    backgroundColor: "#0047AB",
    color: "white",
  };
  const indexstyle: React.CSSProperties = {
    display: "flex",
    width: "50%",
    justifyContent: "space-evenly",
  };
  const name: React.CSSProperties = {
    marginLeft: "3%",
  };
  return (
    <div style={headerstyle}>
      <h2 style={name}>KimTaeju</h2>
      <div style={indexstyle}>
        <div>Home</div>
        <div>Programming</div>
        <div>Experience</div>
        <div>Education</div>
      </div>
    </div>
  );
};

export default Headerlayout;
