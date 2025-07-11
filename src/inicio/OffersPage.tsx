import "../css/offers.css";
import "../css/basicstyles.css";
import NavigationButtons from "../globales/NavPanel";
import { offersData } from "../data/OffersData";
import { useNavigate } from "react-router-dom";

function OffersPage() {
  const navigate = useNavigate();

  const handleOrder = (offerTitle: string) => {
    // Redirige a /contact con el título como query string
    navigate(`/?offer=${encodeURIComponent(offerTitle)}`);
  };

  return (
    <div className="layer">
      <div className="content">
        <h1>Yigaly's Offers</h1>
        <p>
          I’ll occasionally post offers for specific types of commissions I’m
          interested in at the moment—like experimenting with new styles or
          ideas I haven’t showcased much yet, or simply for fun. There will also
          be giveaways, promotions, discounts, and other limited-time
          opportunities that I come up with ^^
        </p>
        <NavigationButtons />
        <hr />
      </div>
      <div className="offer-container">
        {offersData.map((offer, idx) => (
          <div className="offer-block" key={idx}>
            <h2>{offer.title}</h2>
            <div className="offer-row">
              <div className="offer-label">Description</div>
              <div className="offer-value">
                {offer.description || <em>No description</em>}
              </div>
            </div>
            <div className="offer-row">
              <div className="offer-label">Price</div>
              <div className="offer-value">
                {offer.priceUSD && offer.priceEUR ? (
                  <>
                    ${offer.priceUSD} / €{offer.priceEUR}
                  </>
                ) : offer.priceUSD ? (
                  <>${offer.priceUSD}</>
                ) : offer.priceEUR ? (
                  <>€{offer.priceEUR}</>
                ) : (
                  <em>Not specified</em>
                )}
              </div>
            </div>
            {offer.slotsAvailable && (
              <div className="offer-row">
                <div className="offer-label">Slots available</div>
                <div className="offer-value">{offer.slotsAvailable}</div>
              </div>
            )}
            {offer.validity && (
              <div className="offer-row">
                <div className="offer-label">Valid until</div>
                <div className="offer-value">
                  {offer.validity instanceof Date
                    ? offer.validity.toLocaleDateString()
                    : offer.validity}
                </div>
              </div>
            )}
            <button
              className="custom-button"
              onClick={() => handleOrder(offer.title)}
            >
              Order
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OffersPage;
