import styled from "styled-components";
import logoImage from "../../images/logo.png";

const Header = ({ logo }) => (
  <header>
    {!logo && (
      <div className="logo">
        <img src={logoImage} />
      </div>
    )}
  </header>
);
export default Header;
