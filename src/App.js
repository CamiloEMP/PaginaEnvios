import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import { PageNotFound } from "./components/Error404/PageNotFound";
import { UExternPackages } from "./components/UExternPackages";
import { UInternPackages } from "./components/UInternPackages";
import { Home } from "./components/Home";
import { GlobalContext } from "./context/Context";
import { HeaderProvisional } from "./HeaderProvisional";
import { PackegesReception } from "./components/PackegesReception";
function App() {
  return (
    <>
      <GlobalContext>
        <Routes>
          <Route exact path="/" element={<HeaderProvisional />} />
          <Route exact path="/Home" element={<Home />} />
          <Route
            exact
            path="/Package-reception"
            element={<PackegesReception />}
          />
          <Route exact path="/user-extern" element={<UExternPackages />} />
          <Route exact path="/user-intern" element={<UInternPackages />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </GlobalContext>
    </>
  );
}

export default App;
