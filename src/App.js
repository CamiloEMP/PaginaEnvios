import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import { PageNotFound } from "./components/Error404/PageNotFound";
import { UExternPackages } from "./components/UExternPackages";
import { UInternPackages } from "./components/UInternPackages";
import { GlobalContext } from "./context/Context";
import { HeaderProvisional } from "./HeaderProvisional";
import {PackegesReception} from "./components/PackegesReception";
import { ScheduledShipments2} from "./components/ScheduledShipments2";
import { Home } from "./components/Home";
import { Recepcion } from "./components/Recepcion";
function App() {
  return (
    <>
      <GlobalContext>
        <Routes>
          <Route exact path="/home-user-intern" element={<Home />} />
          <Route exact path="/user-extern" element={<UExternPackages />} />
          <Route exact path="/user-intern" element={<UInternPackages />} />
          <Route exact path="/ScheduledShipments2" element={<ScheduledShipments2 />} />
          <Route exact path="/Recepcion" element={<Recepcion />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </GlobalContext>
    </>
  );
}

export default App;
