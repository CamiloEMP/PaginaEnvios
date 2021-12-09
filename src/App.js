import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import { UInternPackages } from "./components/UInternPackages";
import { Home } from "./components/Home";
import { HeaderProvisional } from "./HeaderProvisional";
import {PackegesReception} from "./components/PackegesReception"
function App() {
  return (
    <>
      <Routes>
        <Route exact path="/user-intern" element={<UInternPackages />} />
        <Route exact path="/Home" element={<Home/>} />
        <Route exact path="/Package-reception" element={<PackegesReception />} />
        <Route exact path="/" element={<HeaderProvisional />} />
      </Routes>
    </>
  );
}

export default App;
