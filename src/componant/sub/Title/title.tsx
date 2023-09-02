import React, { useEffect, useState } from "react";
type tilteproups = {
  title: string;
};
const Title = ({ title }: tilteproups) => {
  const titlestyle: React.CSSProperties = {
    fontSize: "xx-large",
    fontWeight: "1000",
  };
  return (
    <>
      <h1 style={titlestyle}>{title}</h1>
    </>
  );
};

export default Title;
