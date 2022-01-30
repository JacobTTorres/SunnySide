import "./navbar.css";

export default function Navbar() {
  return (
    <section className="navbarContainer">
      <div className="navbarContent">
        <div className="navHeader">
          <h2 className="navTitle">sunnyside</h2>
        </div>
        <div className="navLinks">
          <ul className="pageLinks">
            <li className="About">
              <a className="links">About</a>
            </li>
            <li className="Services">
              <a className="links">Services</a>
            </li>
            <li className="Projects">
              <a className="links">Projects</a>
            </li>
            <li className="Contact">
              <a className="contactLink">CONTACT</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
