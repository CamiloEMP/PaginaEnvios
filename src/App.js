import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import { PageNotFound } from "./components/Error404/PageNotFound";
import { UExternPackages } from "./components/UExternPackages";
import { UInternPackages } from "./components/UInternPackages";
<<<<<<< HEAD
import { GlobalContext } from "./context/Context";
import { HeaderProvisional } from "./HeaderProvisional";
import {PackegesReception} from "./components/PackegesReception";
import { ScheduledShipments } from "./components/ScheduledShipments";
import { Home } from "./components/Home";
=======
import { Home } from "./components/Home";
import { GlobalContext } from "./context/Context";
import { HeaderProvisional } from "./HeaderProvisional";
import { PackegesReception } from "./components/PackegesReception";
>>>>>>> 12eba0c755fccb869b904519f51cad8570e782f6
function App() {
  return (
    <>
      <GlobalContext>
        <Routes>
<<<<<<< HEAD
          <Route exact path="/" element={<Home />} />
=======
          <Route exact path="/" element={<HeaderProvisional />} />
          <Route exact path="/Home" element={<Home />} />
          <Route
            exact
            path="/Package-reception"
            element={<PackegesReception />}
          />
>>>>>>> 12eba0c755fccb869b904519f51cad8570e782f6
          <Route exact path="/user-extern" element={<UExternPackages />} />
          <Route exact path="/user-intern" element={<UInternPackages />} />
          <Route exact path="/ScheduledShipments" element={<ScheduledShipments />} />
          <Route exact path="/PackegesReception" element={<PackegesReception />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </GlobalContext>
    </>
  );
}

export default App;
