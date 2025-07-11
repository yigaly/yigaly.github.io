import CommContainer from "../globales/CommContainer";
import { useState } from "react";
import NavigationButtons from "../globales/NavPanel";
import { commData } from "../data/commData";
import "../css/price-list.css";
import "../css/basicstyles.css";

function PricesPage() {
  return (
    <div className="infopanel">
      <div className="content">
        <div className="priceintro">
          <h1>Yigaly's Price-list</h1>
          <p>
            Hola que tal chicos, queria decirles que los precios pueden variar
            dependiendo de muchos factores tanto como oferta demanda o cuanto
            quiera dibujar
          </p>
          <NavigationButtons />
        </div>
        <div className="content">
          {commData.map((props, idx) => (
            <div className="comm-sec">
              <CommContainer {...props} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PricesPage;
