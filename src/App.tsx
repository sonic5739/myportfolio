import Mainboard from "./mainboard/mainboard";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import MobileLogin from "./mobile_login/mobile_login";
import Mainlayout from "./layout/main/Main";
import Programming from "./sections/progremmaing";
import Experience from "./sections/experience";
import Hobby from "./sections/hobby";
import Trunklayout from "./layout/trunk/trunk";

function App() {
  return (
    <>
      <div>
        <Mainlayout></Mainlayout>
        <Programming></Programming>
        <Experience></Experience>
        <Hobby></Hobby>
        <Trunklayout></Trunklayout>
      </div>
    </>
  );
}

export default App;
