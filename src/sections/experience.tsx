import React from "react";
import { FaSchool } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import Sublayout from "../layout/sub/sub";
import Title from "../componant/sub/Title/title";
import Contants from "../componant/sub/contants/contants";
import Icon from "../componant/sub/icon/icon";
import ReactIcon from "../componant/sub/reacticon/reacticon";

const Experience = () => {
  const iconstyle: React.CSSProperties = {
    width: "80%",
    display: "flex",
    justifyContent: "space-between",
  };
  const maginstyle: React.CSSProperties = {
    marginBottom: "70px",
  };
  return (
    <div style={maginstyle}>
      <Sublayout>
        <Title title={"Experience"}></Title>
        <Contants
          contants1={
            "저는 cospro자격증을 취득하기 위해 자격증 시험을 보고 cospro2급을 취득했습니다"
          }
          contants2={"교내 it대회에서 은상을 받았습니다."}
        ></Contants>
        <div style={iconstyle}>
          <Icon
            realIcon={<ReactIcon Icon={FaSchool}></ReactIcon>}
            icon="school"
          ></Icon>
          <Icon
            realIcon={<ReactIcon Icon={CgProfile}></ReactIcon>}
            icon="cospro"
          ></Icon>
        </div>
      </Sublayout>
    </div>
  );
};

export default Experience;
