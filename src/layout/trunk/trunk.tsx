import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Trunklayout = () => {
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };
  const trunkstyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    marginBottom: "80px",
  };
  const projectstyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };
  const projectstyle2: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };
  const projectstyle3: React.CSSProperties = {
    display: "flex",
    justifyContent: "center",
  };
  const boxstyle1: React.CSSProperties = {
    width: "280px",
    height: "250px",
    margin: "10px",
    // border: isHover ? "solid 2px pink" : "solid 2px cornflowerblue",
    // transform: isHover ? "scale(1.2)" : undefined,
    backgroundImage: "url('chelseamember.PNG')",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    cursor: "pointer",
    transition: "all .3s",
    border: "solid 1px rgba(0,0,0,0.15)",
  };
  const boxstyle2: React.CSSProperties = {
    width: "280px",
    height: "250px",
    margin: "10px",
    border: "solid 1px rgba(0,0,0,0.15)",
    backgroundImage: "url('mobilerogin.PNG')",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    cursor: "pointer",
  };
  const boxstyle3: React.CSSProperties = {
    width: "280px",
    height: "250px",
    margin: "10px",
    border: "solid 1px rgba(0,0,0,0.15)",
    backgroundImage: "url('dizimon.PNG')",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    cursor: "pointer",
  };
  const boxstyle4: React.CSSProperties = {
    width: "280px",
    height: "250px",
    margin: "10px",
    border: "solid 1px rgba(0,0,0,0.15)",
    backgroundImage: "url('eggs.PNG')",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    cursor: "pointer",
  };
  const boxstyle5: React.CSSProperties = {
    width: "280px",
    height: "250px",
    margin: "10px",
    border: "solid 1px rgba(0,0,0,0.15)",
    cursor: "pointer",
    backgroundImage: 'url("snake.PNG")',
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };
  const boxstyle6: React.CSSProperties = {
    width: "280px",
    height: "250px",
    margin: "10px",
    border: "solid 1px rgba(0,0,0,0.15)",
    cursor: "pointer",
    backgroundImage: 'url("login.PNG")',
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };
  return (
    <div style={trunkstyle}>
      <div style={projectstyle}>
        <h1>My portfolio</h1>
        <h3>project</h3>
      </div>
      <div style={projectstyle2}>
        <div style={projectstyle3}>
          <a
            href="https://sonic5739.github.io/chelsea/"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={boxstyle1}
          ></a>
          <a
            href="https://sonic5739.github.io/chelsealogin/"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={boxstyle2}
          ></a>
          <a
            href="https://sonic5739.github.io/dizmon/"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={boxstyle3}
          ></a>
        </div>
        <div style={projectstyle3}>
          <a
            href="https://sonic5739.github.io/eggs/"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={boxstyle4}
          ></a>
          <a
            href="https://github.com/sonic5739/pygame/blob/main/index.py"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={boxstyle5}
          ></a>
          <a
            href="https://sonic5739.github.io/login/"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={boxstyle6}
          ></a>
        </div>
      </div>
    </div>
  );
};

export default Trunklayout;
