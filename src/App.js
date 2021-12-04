import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes} from "react-router-dom";
import { UInternPackages } from "./components/UInternPackages";
import { HeaderProvisional } from "./HeaderProvisional";

function App() {


  return (
    <>
      <Routes>
        <Route exact path="/user-intern" element={<UInternPackages />}/>
        <Route exact path="/" element={<HeaderProvisional />}/>
      </Routes>
      
    </>
  );
}

export default App;
