import "./standOut.css";

import StandoutPhoto from "../../images/desktop/image-stand-out.jpg";

export default function StandOut() {
  return (
    <section className="standOutContainer">
      <div className="standOutContent">
        <div className="standOutBackground">
          <img src={StandoutPhoto} alt="backgroundStandout" />
        </div>
        <div className="standOutInfo">
          <h2 className="standOutHeader">Stand out to the right audience</h2>
          <p className="standOutParagraph">
            Using a collaborative formula or designers, researchers,
            photographgers, videographers, and copywriters, we'll build and
            extend your brand in digital places.
          </p>
          <div className="standOutLearnMoreLink">
            <div className="standOutLinkBackdrop"></div>
            <a className="standOutLearnMore">LEARN MORE</a>
          </div>
        </div>
      </div>
    </section>
  );
}
