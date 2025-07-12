import "../css/inicio.css";
import "../css/basicstyles.css";
import NavigationButtons from "../globales/NavPanel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTelegram,
  faXTwitter,
  faTrello,
} from "@fortawesome/free-brands-svg-icons";

function InicioPanel() {
  return (
    <div className="inicio-panel">
      <div className="infopanel">
        <div className="contentpanel">
          <div className="profile-image-panel">
            <img src="/sources/f1.jpg" alt="Profile" />
          </div>

          <h1>Yigaly's commission info</h1>
          <br />
          <p>
            Hi! I'm Yigaly and I've been a digital artist for several years. I'm
            passionate about experimenting with unique ideas and creating
            interesting characters. I mainly focus on illustrations and
            character design, but I'm open to collaborating on a variety of
            other projects!
            <br />
            <br />
            Although I check all my social media, for a faster response I
            recommend sending me a message on Telegram at user{" "}
            <a
              href="https://t.me/Yigaly_Pof"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#229ed9", textDecoration: "underline" }}
            >
              @Yigaly_Pof
            </a>{" "}
            or by email at{" "}
            <a
              href="mailto:yigalycreations@gmail.com"
              style={{
                color: "#4fc3f7",
                textDecoration: "underline",
                fontWeight: "bold",
              }}
            >
              yigalycreations@gmail.com
            </a>
            .
            <br />
          </p>
          <br />
          <NavigationButtons />
          <div className="social-buttons">
            <a
              className="social-icon"
              href="https://www.instagram.com/yigaly_pof_art?igsh=NXhlbm5yYjdiYXlw"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              className="social-icon"
              href="https://t.me/YigalyPofArtGalery"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Telegram"
            >
              <FontAwesomeIcon icon={faTelegram} />
            </a>

            <a
              className="social-icon"
              href="https://x.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X"
            >
              <FontAwesomeIcon icon={faXTwitter} />
            </a>

            <a
              className="social-icon"
              href="https://www.furaffinity.net/user/yigaly/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="FurAffinity"
            >
              <img
                src="/public/sources/furaffinity.svg"
                alt="FurAffinity"
                width={35}
                height={35}
                style={{ display: "block" }}
              />
            </a>

            <a
              className="social-icon"
              href="https://trello.com/invite/b/687170b60eb15163e755bdcd/ATTI415bb93fcdaef2c0ef3b32c5d24b500bD2F7C925/yigalys-commission-queue"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Trello"
            >
              <FontAwesomeIcon icon={faTrello} />
            </a>
          </div>

          <div className="credit-panel">
            <p>
              ( page by Yigaly herself ) <strong>**Beta</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InicioPanel;
