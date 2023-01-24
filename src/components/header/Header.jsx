import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/me.png";
import HeaderSocials from "./HeaderSocials";
const Header = () => {
  return (
    <header>
      <div className="container header__container" id="home">
        <h5>Hello I'm</h5>
        <h1>Anuj Soni</h1>
        <h5 className="text-light">A Passionate Web Developer</h5>
        <CTA></CTA>
        <HeaderSocials />
        <div className="centerMe">
          <div className="me">
            <img src={ME} alt="" />
          </div>
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
