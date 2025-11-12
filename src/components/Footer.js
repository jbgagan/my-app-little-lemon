import {
  faFacebook,
  faTwitter,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./footer.css";

const contacts = [
  { icon: faLocationDot, info: "123 Fake Ave, Chicago, IL 60602" },
  { icon: faPhone, info: "+1 (012) 345-6789" },
  { icon: faEnvelope, info: "info@littlelemon.com" },
];

const socials = [
  { icon: faFacebook, name: "facebook" },
  { icon: faInstagram, name: "instagram" },
  { icon: faTwitter, name: "twitter" },
  { icon: faYoutube, name: "youtube" },
];

const Footer = () => {
  return (
    <footer className="site-footer">
      <img
        className="site-footer-logo"
        src={"./icons_assets/logo-white.png"}
        alt="Little Lemon"
      />
      <nav className="site-footer-nav">
    
        <ul>
          
        </ul>
      </nav>
      <div className="site-footer-contact">
        <h4>Contact us</h4>
        <address>
          {contacts.map((contact, index) => (
            <p key={index}>
              <FontAwesomeIcon icon={contact.icon} /> {contact.info}
            </p>
          ))}
        </address>
      </div>
      <div className="site-footer-social">
        <h4>Connect with us</h4>
        {socials.map((social, index) => (
          <a
            key={index}
            href={`https://www.${social.name}.com`}
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={social.icon} size="lg" />
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
