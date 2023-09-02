import React, { useEffect, useState } from "react";
import Headerlayout from "../header/header";
const Mainlayout = () => {
  const divstyle: React.CSSProperties = {
    width: "100%",
    height: "100vh",
    backgroundImage: "url(chelsea.jpg)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
  };
  const imgstyle: React.CSSProperties = {
    width: "250px",
    height: "250px",
    borderRadius: "50%",
  };
  const fontstyle: React.CSSProperties = {
    textAlign: "center",
    color: "white  ",
  };
  return (
    <div>
      <Headerlayout></Headerlayout>
      <div style={divstyle}>
        <div>
          <img style={imgstyle} src="REECEJAMES.jpg" alt="" />
        </div>
        <div style={fontstyle}>
          <h1>안녕하세요</h1>
          <h1> 김태주 입니다.</h1>
          <h2>현재 동도중학교를 다니고 있고 중학교 3학년 입니다.</h2>
        </div>
      </div>
    </div>
  );
};

export default Mainlayout;
