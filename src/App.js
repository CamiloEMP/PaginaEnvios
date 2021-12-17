import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import { Entregas } from "./components/Entregas";
import { Entregas2 } from "./components/Entregas2";
import { UInternPackages } from "./components/UInternPackages";
import { PageNotFound } from "./components/Error404/PageNotFound";
import { UExternPackages } from "./components/UExternPackages";
import { GlobalContext } from "./context/Context";
import { ScheduledShipments} from "./components/ScheduledShipments";
import { Home } from "./components/Home";
import { HomeUsers } from "./components/HomeUsers";
import { PackegesReception } from "./components/PackegesReception";
import { FormUser } from "./components/FormUser";
function App() {
  return (
    <>
      <GlobalContext>
        <Routes>
          <Route exact path="/" element={<HomeUsers/>} />
          <Route exact path="/home-user-intern" element={<Home />} />
          <Route exact path="/user-extern" element={<UExternPackages />} />
          <Route exact path="/user-intern" element={<UInternPackages />} />
          <Route exact path="/ScheduledShipments" element={<ScheduledShipments />} />
          <Route exact path="/PackegesReception" element={<PackegesReception />} />
          <Route exact path="/Entregas" element={<Entregas />} />
          <Route exact path="/Entregas2" element={<Entregas2 />} />
          <Route exact path="/FormUser" element={<FormUser />} />
          {/* <Route exact path="/Entregas2" element={<Entregas2 />} /> */}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </GlobalContext>
    </>
  );
}

export default App;
