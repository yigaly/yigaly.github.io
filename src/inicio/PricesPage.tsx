import CommContainer from "../globales/CommContainer";
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
            Here are my current prices. Although I may not update them very
            often, please keep in mind they might change in the future
          </p>
          <NavigationButtons />
        </div>
        <div className="content">
          {commData.map((props) => (
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
