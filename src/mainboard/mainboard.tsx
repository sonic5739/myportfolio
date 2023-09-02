import Mainlayout from "../layout/main/Main";
import Trunklayout from "../layout/trunk/trunk";
import Experience from "../sections/experience";
import Hobby from "../sections/hobby";
import Programming from "../sections/progremmaing";

function Mainboard() {
  return (
    <div>
      <Mainlayout></Mainlayout>
      <Programming></Programming>
      <Experience></Experience>
      <Hobby></Hobby>
      <Trunklayout></Trunklayout>
    </div>
  );
}

export default Mainboard;
