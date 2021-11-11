import { FaBars } from 'react-icons/fa';
import styled from "styled-components";

const MenuTitle = styled.span`
    margin-right: 1.0rem;
`;

const StyledToggle = styled.button`
    position: fixed;
    top: 1.5rem;
    right: 1rem;
    color: #ffffff;
    background: transparent;
    padding: .75rem;
    display: flex;
    place-items: center;
    font-family: Roboto,sans-serif;
    font-size: 1.2rem;
    font-weight: 700;
    letter-spacing: .16667em;
    cursor: pointer;
    text-transform: uppercase;
    border: 0;
    z-index: 3;
`;

const Navigation = ({ handleNavToggle }) => (
    <StyledToggle className="animate__animated animate__fadeInRight" onClick={handleNavToggle}>
        <MenuTitle>Menu</MenuTitle> <FaBars />
    </StyledToggle>
);
export default Navigation;
