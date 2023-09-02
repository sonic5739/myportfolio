import React, { useEffect, useState } from "react";
type Sublayoutprops = {
  children?: React.ReactNode;
};
const Sublayout = ({ children }: Sublayoutprops) => {
  const container: React.CSSProperties = {
    width: "80%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto",
  };
  return <section style={container}>{children}</section>;
};

export default Sublayout;
