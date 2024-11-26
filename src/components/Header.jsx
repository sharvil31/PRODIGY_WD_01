import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleNavbarClass = () => {
    setIsActive(!isActive);
  }


  const getNavLinkStyle = ({ isActive }) => {
    return isActive ? "active-link" : "";
  }
  

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <NavLink to="/" className="name">
        <span>navbar</span>
      </NavLink>

      <nav onClick={toggleNavbarClass} className={`navbar ${isActive ? "active" : ""}`}>
        <NavLink to="/" className={getNavLinkStyle}>Home</NavLink>
        <NavLink to="/About" className={getNavLinkStyle}>About Us</NavLink>
        <NavLink to="/products" className={getNavLinkStyle}>Products</NavLink>
        <NavLink to="/ContactUs" className={getNavLinkStyle}>Contact Us</NavLink>
      </nav>

      <div className="btns">
        <div className="btn log-in-btn">Log In</div>
        <div className="btn sign-up-btn">Sign Up</div>
        <div onClick={toggleNavbarClass} id="menu-icon" title="Menu" class="fas fa-bars">
          <FontAwesomeIcon icon={isActive ? faXmark : faBars} size="lg" />
        </div>
      </div>
    </header>
  );
};

export default Header;
