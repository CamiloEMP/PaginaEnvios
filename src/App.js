import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import { PageNotFound } from "./components/Error404/PageNotFound";
import { UExternPackages } from "./components/UExternPackages";
import { UInternPackages } from "./components/UInternPackages";
import { GlobalContext } from "./context/Context";
import {PackegesReception} from "./components/PackegesReception";
import { ScheduledShipments } from "./components/ScheduledShipments";
import { Home } from "./components/Home";
import { HomeUsers } from "./components/HomeUsers";

function App() {
  return (
    <>
      <GlobalContext>
        <Routes>
          <Route exact path="/" element={<HomeUsers />} />
          <Route exact path="/home-user-intern" element={<Home />} />
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