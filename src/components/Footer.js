import { Link } from "react-router-dom";
import "./footer.css"
const Footer =()=>{
  return(
    <>
    <div className="footer">
      <div className="footer-img">
        <img src="./icons_assets/logo.svg" alt="footer-logo" />
      </div>
      <div className="footer-navigation">
      <h3>Doormat Navigation</h3>
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
        </div>
        <div className="contact">
          <h3>Contact</h3>
          <p>Address - New York, 123 Broadway</p>
          <p>Email - littlelemon@abc.com</p>
          <p>Ph - +1 82983 38383</p>
        </div>
        <div className="social-media">
          <h3>Social media links</h3>
        </div>
     
    
    </div>
    </>
  )
}
export default Footer;
