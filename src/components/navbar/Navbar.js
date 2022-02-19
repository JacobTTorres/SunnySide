import React, {useState} from "react"

import "./navbar.css";
import DropdownMenu from "../dropdownMenu/DropdownMenu"

import Hamburger from "../../images/icon-hamburger.svg";

export default function Navbar() {
  const [dropdownButton, setDropdownButton] = useState(false);

  return (<section className="navbarContainer">
    <div className="navbarContent">
      <div className="navHeader">
        <h2 className="navTitle">sunnyside</h2>
      </div>
      <div className="navLinks">
        <ul className="pageLinks">
          <li className="About">
            <p className="links">About</p>
          </li>
          <li className="Services">
            <p className="links">Services</p>
          </li>
          <li className="Projects">
            <p className="links">Projects</p>
          </li>
          <li className="Contact">
            <p className="contactLink">CONTACT</p>
          </li>
        </ul>
      </div>
      <div className="menuButton" >
        <button className="button" >
          <img src={Hamburger} alt="Menu" className="hamburgerIcon" onClick={() => setDropdownButton(true)} setTrigger={setDropdownButton}/>
          <DropdownMenu trigger={dropdownButton}  setTrigger={setDropdownButton}></DropdownMenu>
        </button>
      </div>
    </div>
  </section>);
}
