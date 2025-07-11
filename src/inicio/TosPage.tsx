import "../css/tos.css";
import "../css/basicstyles.css";
import NavigationButtons from "../globales/NavPanel";

function TosPage() {
  return (
    <div className="content">
      <h1>Yigaly's Terms of Service</h1>
      <NavigationButtons />
      <hr></hr>
      <div className="will">
        <div className="block">
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
        </div>
        <div className="block">
          <h1>I DON'T DRAW</h1>
          <ul>
            <li>Porn</li>
            <li>Very explicit fetishes</li>
            <li>Nudity that I cannot easily cover</li>
          </ul>
        </div>
      </div>
      <div className="block">
        <h1>Payment Process</h1>
        <p>
          I start drawing only after 100% prepayment. All prices are in USD.
          Please, do not claim a slot if you do not have the money ready.
        </p>
      </div>
      <div className="block">
        <h1>Waiting List</h1>
        <p>
          You can join the waiting list if commissions are closed. I will
          contact you when a slot becomes available.
        </p>
      </div>
      <div className="block">
        <h1>Fixes/Changes</h1>
        <p>
          Minor changes are allowed during the sketch phase. Major changes after
          the lineart or coloring stage may incur additional charges.
        </p>
      </div>
      <div className="block">
        <h1>More Info</h1>
        <ul>
          <li>You can request more WIPs (work-in-progress updates).</li>
          <li>
            I can refund your payment before I start the artwork. After that,
            refunds will depend on the progress of the commission.
          </li>
          <li>
            I may use timelapses, photos, and HD versions of your commission for
            personal purposes such as my social media, Patreon, etc.
          </li>
        </ul>
      </div>
      <NavigationButtons />
    </div>
  );
}

export default TosPage;
