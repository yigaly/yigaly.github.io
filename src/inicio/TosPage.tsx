import { motion } from "framer-motion";
import "../css/tos.css";
import "../css/basicstyles.css";
import NavigationButtons from "../globales/NavPanel";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const blockVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function TosPage() {
  return (
    <div className="content">
      <h1>Yigaly's Terms of Service</h1>
      <NavigationButtons />
      <hr />
      {/* Agrupa todos los bloques en un motion.div para aplicar el stagger */}
      <motion.div
        className="blocks-list"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div
          className="will"
          style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}
        >
          <motion.div className="block" variants={blockVariants}>
            <h1>I DRAW</h1>
            <ul>
              <li>Anthros</li>
              <li>Human / Humanoid</li>
              <li>Fantasy creatures</li>
              <li>Fanart</li>
              <li>Backgrounds</li>
              <li>Animation</li>
              <li>Armor & weapons</li>
              <li>cyborgs & robots</li>
              <li>Non-excessive gore</li>
              <li>Suggestive themes</li>
              <li>Artistic nudity</li>
              <li>Characters without a reference sheet</li>
            </ul>
          </motion.div>
          <motion.div className="block" variants={blockVariants}>
            <h1>I DON'T DRAW</h1>
            <ul>
              <li>Porn</li>
              <li>Very explicit fetishes</li>
              <li>Nudity that I cannot easily cover</li>
            </ul>
          </motion.div>
        </div>

        <motion.div className="block" variants={blockVariants}>
          <h1>Payment Process</h1>
          <p>
            I start drawing only after 100% prepayment. I accept payments in
            both US dollars (USD) and euros (EUR).
          </p>
        </motion.div>
        <motion.div className="block" variants={blockVariants}>
          <h1>Commissions Status & Waitlist</h1>
          <p>
            If my commissions are closed, you can still send me a message and I
            will add you to a waitlist to notify you when my commissions open
            again. While this doesn’t guarantee you a slot, you’ll be among the
            first to know without having to constantly check my social media.
          </p>
        </motion.div>
        <motion.div className="block" variants={blockVariants}>
          <h1>Turnaround Time</h1>
          <p>
            I currently balance commissions with my job and personal studies, so
            I mainly work on drawings during weekends. The turnaround time for
            my commissions varies; while I usually complete them within a few
            weeks after accepting an order, I don’t set a fixed deadline unless
            one is agreed upon with the client. I always prioritize the quality
            of my artwork over speed, as I want to deliver pieces I’m truly
            proud of.
          </p>
        </motion.div>
        <motion.div className="block" variants={blockVariants}>
          <h1>Fixes/Changes</h1>
          <p>
            Minor changes are allowed during the sketch phase. Major changes
            after the lineart or coloring stage may incur additional charges.
          </p>
        </motion.div>
        <motion.div className="block" variants={blockVariants}>
          <h1>More Info</h1>
          <ul>
            <li>You can request more WIPs (work-in-progress updates).</li>
            <li>
              I can refund your payment before I start the artwork. After that,
              refunds will depend on the progress of the commission.
            </li>
            <li>
              I may use timelapses, photos, and HD versions of your commission
              for personal purposes such as my social media etc.
            </li>
          </ul>
        </motion.div>
      </motion.div>
      <NavigationButtons />
    </div>
  );
}

export default TosPage;
