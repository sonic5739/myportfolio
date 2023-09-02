    import Mainboard from "./mainboard/mainboard";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import MobileLogin from "./mobile_login/mobile_login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/main" element={<Mainboard />}></Route>
          <Route path="/mobileLogin" element={<MobileLogin />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
