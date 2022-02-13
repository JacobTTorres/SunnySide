import "./client.css";

import EmilyImg from "../../images/image-emily.jpg";
import ThomasImg from "../../images/image-thomas.jpg";
import JennieImg from "../../images/image-jennie.jpg";

export default function Client() {
  return (
    <section className="clientContainer">
      <div className="clientContent">
        <h2 className="clientHeader">CLIENT TESTIMONIALS</h2>
        <div className="clients">
          <div className="client">
            <img src={EmilyImg} alt="Emily" className="clientPhoto" />
            <p className="clientTestimony">
              We put our trust in Sunnyside and they delived, making sure our
              needs were met and deadlines were always hit.
            </p>
            <div className="clientInfo">
              <h3 className="clientName">Emily R.</h3>
              <p className="clientOccupation">Marketing Director</p>
            </div>
          </div>
          <div className="client">
            <img src={ThomasImg} alt="Thomas" className="clientPhoto" />
            <p className="clientTestimony">
              Sunnyside's enthusiasm coupled with their keen interest in our
              brand's success made it a satisfying and enjoyable experience.
            </p>
            <div className="clientInfo">
              <h3 className="clientName">Thomas S.</h3>
              <p className="clientOccupation">Chief Operating Officer</p>
            </div>
          </div>
          <div className="client">
            <img src={JennieImg} alt="Jennie" className="clientPhoto" />
            <p className="clientTestimony">
              Increadible end result! Our sales increased over 400% when we
              worked with Sunnyside. Highly recommended!
            </p>
            <div className="clientInfo">
              <h3 className="clientName">Jennie F.</h3>
              <p className="clientOccupation">Business Owner</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
