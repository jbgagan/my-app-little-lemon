import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <nav>
        <a href="home">
          <img src="./icons_assets/Logo.svg" alt="Logo" className="logo" />
        </a>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Chicago">About</Link>
          </li>
          <li>
            <Link to="/menu">Menu</Link>
          </li>
          <li>
            <Link to="/bookingpage">Reservation</Link>
          </li>
          <li>
            <Link to="/orderonline">Order online</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
export default NavBar;
