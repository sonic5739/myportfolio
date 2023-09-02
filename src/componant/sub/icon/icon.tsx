import React, { useEffect, useState } from "react";
import { IconType } from "react-icons";
type Iconproups = {
  icon: string;
  realIcon: React.ReactNode;
};
const Icon = ({ icon, realIcon }: Iconproups) => {
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  const container: React.CSSProperties = {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto",
  };
  const realIconstyle: React.CSSProperties = {
    width: "100px",
    height: "100px",
    border: isHover ? "solid 2px pink" : "solid 2px cornflowerblue",
    borderRadius: "50%",
    padding: "8%",
    color: isHover ? "pink" : "cornflowerblue",
    transform: isHover ? "rotate(45deg)" : "rotate(0deg)",
    transition: "all 1s",
  };

  return (
    <>
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={container}
      >
        <div style={realIconstyle}>{realIcon}</div>
        <div>{icon}</div>
      </div>
    </>
  );
};

export default Icon;
