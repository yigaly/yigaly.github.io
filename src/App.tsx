import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./css/basicstyles.css";
import "./inicio/InicioPanel";
import InicioPanel from "./inicio/InicioPanel";
import TosPage from "./inicio/TosPage";
import PricesPage from "./inicio/PricesPage";
import OffersPage from "./inicio/OffersPage";

function App() {
  return (
    <div className="bckground">
      <Router>
        <Routes>
          <Route path="/" element={<InicioPanel />} />
          <Route path="/tos" element={<TosPage />} />
          <Route path="/prices" element={<PricesPage />} />
          <Route path="/offers" element={<OffersPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
