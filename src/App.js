import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import { PageNotFound } from "./components/Error404/PageNotFound";
import { UExternPackages } from "./components/UExternPackages";
import { UInternPackages } from "./components/UInternPackages";
<<<<<<< HEAD
import { Home } from "./components/Home";
=======
import { GlobalContext } from "./context/Context";
>>>>>>> 46a03e81d761100bc2d8e22c77891dcbbaea4900
import { HeaderProvisional } from "./HeaderProvisional";
import {PackegesReception} from "./components/PackegesReception"
function App() {
  return (
    <>
<<<<<<< HEAD
      <Routes>
        <Route exact path="/user-intern" element={<UInternPackages />} />
        <Route exact path="/Home" element={<Home/>} />
        <Route exact path="/Package-reception" element={<PackegesReception />} />
        <Route exact path="/" element={<HeaderProvisional />} />
      </Routes>
=======
      <GlobalContext>
        <Routes>
          <Route exact path="/" element={<HeaderProvisional />} />
          <Route exact path="/user-extern" element={<UExternPackages />} />
          <Route exact path="/user-intern" element={<UInternPackages />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </GlobalContext>
>>>>>>> 46a03e81d761100bc2d8e22c77891dcbbaea4900
    </>
  );
}

export default App;
