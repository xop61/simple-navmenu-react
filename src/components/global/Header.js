import styled from "styled-components";
import logoImage from "../../images/logo.png";

const NavHeader = styled.header`
  position: absolute;
  left: 0;
  top: 0;
  z-index: 2;
`;

const Header = ({ logo }) => (
  <NavHeader>
    {!logo && (
      <div className="logo">
        <img src={logoImage} alt="logo" />
      </div>
    )}
  </NavHeader>
);
export default Header;
