import "./photos.css";

import Milk from "../../images/desktop/image-gallery-milkbottles.jpg";
import Orange from "../../images/desktop/image-gallery-orange.jpg";
import Cone from "../../images/desktop/image-gallery-cone.jpg";
import Sugar from "../../images/desktop/image-gallery-sugarcubes.jpg";

export default function Photos() {
  return (
    <section className="photosContainer">
      <div className="photoContent">
        <div className="topRow">
          <img src={Milk} alt="Milk" className="photoImg" />
          <img src={Orange} alt="Orange" className="photoImg" />
        </div>
        <div className="bottomRow">
          <img src={Cone} alt="Cone" className="photoImg" />
          <img src={Sugar} alt="Sugar" className="photoImg" />
        </div>
      </div>
    </section>
  );
}
