// src/components/NavigationButtons.jsx

import { useNavigate } from "react-router-dom";

const NavigationButtons = ({
  buttons = [
    { label: "TOS", path: "/tos" },
    { label: "Price-list", path: "/prices" },
    { label: "Contact", path: "/" },
    { label: "Offers", path: "/offers" },
  ],
  className = "button-panel",
}) => {
  const navigate = useNavigate();

  return (
    <div className={className}>
      {buttons.map((btn, idx) => (
        <button
          key={idx}
          className="custom-button"
          onClick={() => navigate(btn.path)}
        >
          {btn.label}
        </button>
      ))}
    </div>
  );
};

export default NavigationButtons;
