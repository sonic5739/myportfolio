import React from "react";
import { LuGamepad } from "react-icons/lu";
import { GiSoccerKick } from "react-icons/gi";
import { BiMoviePlay } from "react-icons/bi";
import Sublayout from "../layout/sub/sub";
import Title from "../componant/sub/Title/title";
import Contants from "../componant/sub/contants/contants";
import Icon from "../componant/sub/icon/icon";
import ReactIcon from "../componant/sub/reacticon/reacticon";

const Hobby = () => {
  const iconstyle: React.CSSProperties = {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
  };
  return (
    <>
      <Sublayout>
        <Title title={"Hobby"}></Title>
        <Contants
          contants1={
            "저는 게임하는 것을 좋아합니다.  보통 pc게임을 많이합니다. 영화보기를 좋아합니다."
          }
          contants2={
            "축구하는 것도 좋아하고 축구경기 보는것도 취미입니다. 제가 제일 좋아하는 축구 팀은 첼시입니다"
          }
        ></Contants>
        <div style={iconstyle}>
          <Icon
            realIcon={<ReactIcon Icon={LuGamepad}></ReactIcon>}
            icon="game"
          ></Icon>
          <Icon
            realIcon={<ReactIcon Icon={GiSoccerKick}></ReactIcon>}
            icon="soccer"
          ></Icon>
          <Icon
            realIcon={<ReactIcon Icon={BiMoviePlay}></ReactIcon>}
            icon="movie"
          ></Icon>
        </div>
      </Sublayout>
    </>
  );
};

export default Hobby;
