import "./transform.css";

import TransformPhoto from "../../images/desktop/image-transform.jpg";
import TransformPhotoMobile from "../../images/mobile/image-transform.jpg";

export default function Transform() {
  return (
    <section className="transformContainer">
      <div className="transformContent">
        <div className="transformInfo">
          <div className="info">
            <h2 className="transformHeader">Transform your brand</h2>
            <p className="transformParagraph">
              We are a full-service creative agency specializing in helping
              brands grow fast. Engage your clients through compelling visuals
              that do most of the marketing for you.
            </p>
            <div className="transformLearnMoreLink">
              <div className="transformLinkBackdrop"></div>
              <a className="transformLearnMore">LEARN MORE</a>
            </div>
          </div>
        </div>
        <div className="transformBackground">
          <img
            src={TransformPhoto}
            alt="backgroundTransform"
            className="transformBackgroundImg"
          />
          <img
            src={TransformPhotoMobile}
            alt="backgroundTransform"
            className="transformBackgroundImgMobile"
          />
        </div>
      </div>
    </section>
  );
}
