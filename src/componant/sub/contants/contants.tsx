import React, { useEffect, useState } from "react";
type contantsproups = {
  contants1: string;
  contants2: string;
};
const Contants = ({ contants1, contants2 }: contantsproups) => {
  const contantsstyle: React.CSSProperties = {
    fontSize: "large",
    fontWeight: "600",
  };
  const contantsstyle2: React.CSSProperties = {
    fontSize: "large",
    fontWeight: "600",
    marginBottom: "7%",
  };
  return (
    <>
      <div style={contantsstyle}>{contants1}</div>
      <div style={contantsstyle2}>{contants2}</div>
    </>
  );
};

export default Contants;
