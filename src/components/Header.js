import { HashLink } from "react-router-hash-link";

function NavElement(props) {
  return (
    <HashLink className="navLink" to={props.to} smooth>
      <li className="nav">{props.name}</li>
    </HashLink>
  );
}

function Header() {
  return (
    <header id="home" className="blank headerContainer">
      <div className="container-header">
        <img
          alt="logo"
          className="logoH"
          src={require("../resources/nirsin-logo.png")}
        />
      </div>

      <div>
        <ul className="navbar">
          <NavElement to="#home" name="Home" />
          <NavElement to="#services" name="Services" />
          <NavElement to="#aboutus" name="About Us" />
          <NavElement to="#cards" name="Cards" />
          <NavElement to="#contacts" name="Contacts" />
        </ul>
      </div>
    </header>
  );
}

export default Header;
