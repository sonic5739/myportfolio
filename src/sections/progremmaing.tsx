import React from "react";
import { BsFiletypeHtml } from "react-icons/bs";
import { BsFiletypeCss } from "react-icons/bs";
import { DiJavascript1 } from "react-icons/di";
import Sublayout from "../layout/sub/sub";
import Title from "../componant/sub/Title/title";
import Contants from "../componant/sub/contants/contants";
import Icon from "../componant/sub/icon/icon";
import ReactIcon from "../componant/sub/reacticon/reacticon";

const Programming = () => {
  const iconstyle: React.CSSProperties = {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
  };
  const maginstyle: React.CSSProperties = {
    marginBottom: "70px",
  };
  return (
    <div style={maginstyle}>
      <Sublayout>
        <Title title={"programming"}></Title>
        <Contants
          contants1={"python으로 시작해서 Html, Css 그리고 js를 배웠습니다."}
          contants2={"React에 대해서도 배웠습니다."}
        ></Contants>
        <div style={iconstyle}>
          <Icon
            realIcon={<ReactIcon Icon={BsFiletypeHtml}></ReactIcon>}
            icon="Html"
          ></Icon>
          <Icon
            realIcon={<ReactIcon Icon={BsFiletypeCss}></ReactIcon>}
            icon="css"
          ></Icon>
          <Icon
            realIcon={<ReactIcon Icon={DiJavascript1}></ReactIcon>}
            icon="js"
          ></Icon>
        </div>
      </Sublayout>
    </div>
  );
};

export default Programming;
