import React from "react";
import "./Header.css";
import logo from "../../assets/birthday.jpg";
import Navlinks from "../../Navlinks";
import { VscAccount } from "react-icons/vsc";
import { FaShoppingCart } from "react-icons/fa";
import { HashLink as Link } from "react-router-hash-link";

function Header() {
  return (
    <>
      <div className="header_container">
        <div className="firstrow">
          <div className="container_left">
            <img src={logo} className="logo" />
            <div className="maintopic">
            
              FLOWER WORLD
              <br />
              <div className="topic_des"> THE ART OF THE GIFTING</div>
            </div>
          </div>

          <div className="icon_container">
          <button className="icon_button"><Link to = "/Signup#signup">  <VscAccount className="header_icon" /> </Link></button>
           
           <button className="icon_button"> <Link to="/Login#login"> <FaShoppingCart className="header_icon" /> </Link></button> 
          </div>
        </div>

        <br />

        <hr />
        <div className="navigation_bars">
          <Navlinks linkname= "Home" url="Home" className="navlink" />
          <Navlinks linkname= "Birthday" url="Birthday" className="navlink" />
          <Navlinks
            linkname=" Graduations"
            url="Graduations"
            className="navlink"
          />
          <Navlinks
            linkname=" Anniversary"
            url="Anniversary"
            className="navlink"
          />
          <Navlinks linkname=" Wedding" url="Wedding" className="navlink" />
          <Navlinks
            linkname=" Engagement "
            url="Engagement"
            className="navlink"
          />
          <Navlinks linkname="Funeral" url="Funeral" className="navlink" />
        
        </div>
      </div>
    </>
  );
}

export default Header;
