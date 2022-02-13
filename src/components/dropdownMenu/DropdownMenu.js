import "./dropdownMenu.css";

export default function DropdownMenu(props) {
  return (props.trigger) ? (
    <div className="dropdownContent">
      <div className="dropdownLinks">
        <p className="dropdownlink">About</p>
        <p className="dropdownlink">Services</p>
        <p className="dropdownlink">Projects</p>
        <div className="dropdownContactButton">
          <p className="contactLink">CONTACT</p>
        </div>
      </div>
      <div className="closeButton" onClick={() => props.setTrigger(false)}>x</div>
      {props.children}
    </div>
  ) :
    ""
  ;
}
