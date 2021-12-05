import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { UInternPackages } from "./components/UInternPackages";
import { HeaderProvisional } from "./HeaderProvisional";

function App() {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <>
      <Routes>
        <Route
          exact
          path="/user-intern"
          element={
            <UInternPackages
              openMenu={openMenu}
              setOpenMenu={setOpenMenu}
            />
          }
        />
        <Route exact path="/" element={<HeaderProvisional />} />
      </Routes>
    </>
  );
}

export default App;
