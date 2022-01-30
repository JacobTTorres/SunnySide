import "./header.css";

import Arrow from "../../images/icon-arrow-down.svg"

export default function Header() {
  return (
    <section className="headerContainer">
      <h1 className="header">WE ARE CREATIVES</h1>
      <img src={Arrow} alt="" className="arrow"/>
    </section>
  );
}
