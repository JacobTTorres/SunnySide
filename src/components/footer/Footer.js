import "./footer.css";

import Facebook from "../../images/icon-facebook.svg";
import Instagram from "../../images/icon-instagram.svg";
import Twitter from "../../images/icon-twitter.svg";
import Pinterest from "../../images/icon-pinterest.svg";

export default function Footer() {
  return (
    <section className="footerContainer">
      <div className="footerContent">
        <h1 className="footerHeader">sunnyside</h1>
        <div className="footerLinksContainer">
          <a href="" className="footerLinks">
            About
          </a>
          <a href="" className="footerLinks">
            Services
          </a>
          <a href="" className="footerLinks">
            Projects
          </a>
        </div>
        <div className="footerMediaLinks">
          <img src={Facebook} alt="Facebook" className="mediaLinks" />
          <img src={Instagram} alt="Instagram" className="mediaLinks" />
          <img src={Twitter} alt="Twitter" className="mediaLinks" />
          <img src={Pinterest} alt="Pinterest" className="mediaLinks" />
        </div>
      </div>
    </section>
  );
}
