import { IconType } from "react-icons";

type ReactIconProps = {
  Icon: IconType;
};

const ReactIcon = ({ Icon }: ReactIconProps) => {
  const Reactstyle: React.CSSProperties = {
    height: "100%",
    width: "100%",
  };
  return <Icon style={Reactstyle}></Icon>;
};

export default ReactIcon;
