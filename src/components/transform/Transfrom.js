import "./transfrom.css";

import TransfromPhoto from "../../images/desktop/image-transform.jpg";

export default function Transfrom() {
  return (
    <section className="transfromContainer">
      <div className="transfromContent">
        <div className="transformInfo">
          <h2 className="transfromHeader">Transfrom your brand</h2>
          <p className="transformParagraph">
            We are a full-service creative agency specializing in helping brands
            grow fast. Engage your clients through compelling visuals that do
            most of the marketing for you.
          </p>
          <div className="transformLearnMoreLink">
            <a className="transformLearnMore">LEARN MORE</a>
          </div>
        </div>
        <div className="transfromBackground">
          <img src={TransfromPhoto} alt="backgroundTransform" />
        </div>
      </div>
    </section>
  );
}
