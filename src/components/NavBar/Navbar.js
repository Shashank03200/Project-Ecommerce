import React from "react";
import BrandLogo from "../../assets/images/websitelogo.png";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <nav className="Navbar">
        <div className="Navbar__LeftWrapper">
          <a className="Navbar__Brand">
            <img src={BrandLogo} className="Navbar__Brand-Image"></img>
          </a>
        </div>

        {/* <div className="Navbar__CenterWrapper"> */}
        <ul className="Navbar__CenterWrapper">
          <NavLink
            to={"home"}
            className={({ isActive }) => (isActive ? "NavLinkActive" : "")}
          >
            <li>Home</li>
          </NavLink>
          <NavLink
            to="journey"
            className={({ isActive }) => (isActive ? "NavLinkActive" : "")}
          >
            <li>The journey</li>
          </NavLink>
          <NavLink
            to="team"
            className={({ isActive }) => (isActive ? "NavLinkActive" : "")}
          >
            <li>Team</li>
          </NavLink>
          <NavLink
            to="/store"
            className={({ isActive }) => (isActive ? "NavLinkActive" : "")}
          >
            <li>Store</li>
          </NavLink>
          <NavLink
            to="contact"
            className={({ isActive }) => (isActive ? "NavLinkActive" : "")}
          >
            <li>Contact</li>
          </NavLink>
        </ul>

        <div className="Navbar__RightWrapper">
          <div className="Navbar__RightWrapper--UserDetails">
            <i class="fa-regular  fa-user Navbar-UserIcon"></i>
            <span className="Navbar__RightWrapper-UserName">Gagan</span>
          </div>
        </div>
      </nav>
      <nav className="BottomNavbar">
        <ul>
          <li>
            <NavLink to="/">
              <i class="fa-solid fa-house"></i>
            </NavLink>
          </li>

          <li>
            <NavLink to="/journey">
              <i class="fa-solid fa-bars-staggered"></i>
            </NavLink>
          </li>

          <li>
            <NavLink to="/team">
              <i class="fa-solid fa-user-group"></i>
            </NavLink>
          </li>

          <li>
            <NavLink to="/store">
              <i class="fa-solid fa-store"></i>
            </NavLink>
          </li>

          <li>
            <NavLink to="/contact">
              <i class="fa-solid fa-headset"></i>
            </NavLink>
          </li>
          <li>
            <NavLink to="/cart">
              <i class="fa-solid fa-cart-shopping"></i>
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
