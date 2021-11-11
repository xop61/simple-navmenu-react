import { Link } from "react-router-dom";
import { FaTimes, FaChevronRight, FaChevronLeft } from "react-icons/fa";
import styled from "styled-components";
import logoImage from "../../images/logo.png";
import NavigationMenuData from '../data/NavigationMenuData'
import { useState } from "react";
import Media from "./Media";

const StyledMenu = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 100%;
  background-color: rgb(58, 66, 81, 1);
  z-index: 99;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  z-index: 3;
`;

const NavMenuLogo = styled.div`
  position: absolute;
  top: 0.5rem;
  left: 0.5rem;
`;

const NavMenuTitle = styled(Link)`
    color: #eee;
    font-family: Roboto, sans-serif;
    text-decoration: none;
`;

const StyledLink = styled.div`
    color: #eee;
    text-decoration: none;
    padding: 0.5rem 10.5rem;
    font-size: clamp(2rem, 2vw, 3vw);
    font-family: Roboto, sans-serif;
    transition: 0.2s all ease -in -out;

    user-select: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;

    ${Media.md} {   
        padding: 0.5rem 1rem;
        font-size: 1.5rem;
    }
`;

const CloseToggle = styled.button`
    position: fixed;
    top: 1rem;
    right: 1rem;
    background: transparent;
    border: 0;
    color: #fff;
    padding: 0.75rem;
    display: flex;
    place-items: center;
    font-size: 1.5rem;
    cursor: pointer;
    z-index: 2;
`;
const SubMenuContent = styled.div`
    position: fixed;
    width: 1000%;
    height: 100%;
    background: #3a4251;
    margin-top: 170px;
    top: 0;
    padding-top: 10px;
`;
const Subtitle = styled(Link)`
    margin: 10px 0;
    color: #fff;
    text-decoration: none;
    font-family: Roboto, sans-serif;
`;

const BackButton = styled.button`
    margin-left: -30px;
    font-size: 16px;
    border: none;
    background: transparent;
    color: #fff;
    z-index: 2;
    ${Media.md} {   
        margin-left: -10px;
    }
`;
const SubContent = styled.div`
    display: flex;
    flex-direction: column;
`;
const MenuItem = (item, linkTo) => {
    const [toggle, setToggle] = useState(false);
    const handleNavOpen = () => {
        setToggle(true);
    };

    const handleNavClose = () => {
        setToggle(false);
    };

    return (
        <>
            <div onClick={handleNavOpen}>
                {item.item.name}
                <FaChevronRight style={{ fontSize: 22, marginLeft: 10 }} />
            </div>
            {toggle &&
                item.item.children &&
                <SubMenuContent>
                    <BackButton onClick={handleNavClose}>
                        <FaChevronLeft style={{ fontSize: 12, marginRight: 10 }} />
                        BACK
                    </BackButton>
                    <SubContent>
                        {item.item.children && item.item.children.map((item, key) => (
                            <Subtitle to={item.slugName} onClick={linkTo}>
                                {item.name}
                            </Subtitle>
                        ))}
                    </SubContent>
                </SubMenuContent>
            }
        </>
    )
}

const NavigationMenus = ({ handleNavToggle }) => {

    return (
        <StyledMenu>
            <NavMenuLogo>
                <img src={logoImage} alt="logo" />
            </NavMenuLogo>
            {NavigationMenuData.map((item, index) => (
                <StyledLink
                    className="animate__animated animate__fadeInRight"
                >
                    {
                        item.children ?
                            <MenuItem item={item} linkTo={handleNavToggle} />
                            :
                            <NavMenuTitle onClick={handleNavToggle} to={item.slugName}>
                                {item.name}
                            </NavMenuTitle>
                    }
                </StyledLink>
            ))
            }
            <CloseToggle
                className="animate__animated animate__fadeInRight"
                onClick={handleNavToggle}
            >
                <FaTimes />
            </CloseToggle>
        </StyledMenu>
    )
};

export default NavigationMenus;
