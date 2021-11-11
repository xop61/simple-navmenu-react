import { Link } from "react-router-dom";
import styled from "styled-components"
import Media from "../global/Media"

const CFooter = styled.footer`
    background: #2a3830;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding-bottom: 2rem;
    ${Media.md} {
        padding-bottom: 4rem;
    }
`;

const FooterLink = styled(Link)`
    position: relative;
    border: 2px solid #2a3830;
    border-radius: 0;
    color: #2a3830;
    background-color: transparent;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: .14286em;
    text-align: center;
    display: inline-block;
    min-width: 20ch;
    font-weight: 700;
    transition: background-color .2s ease-out,border-color .2s ease-out,color .2s ease-out;
    background-color: #000;
    border-color: #000;
    color: #fff;
    padding: .75rem 1.5rem;
    margin-left: .25rem;
    margin-right: .25rem;
    font-size: .875rem;
    &:hover {
        color: #d9d9d9;
    }

`;

const SocialMedia = styled.div`
    background: #2a3830;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Copyrigtht = styled.div`
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.875rem;
    margin-top: 2rem;
    ${Media.md} {
        margin-right: 1rem;
        margin-left: 1rem;
        flex-wrap: wrap;
    }
`;

const H3 = styled.h3`
    padding-top: 3rem;
    margin-bottom: 1.5rem;
    display: block;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.7em;
    margin-top: 0;
    color: #fff;
    text-align: center;
    ${Media.md} {
        font-size: 0.875rem
    }
`;

const Span = styled.span`
    font-weight: 100;
    line-height: 1.5em;
    font-family: Roboto,sans-serif;
    color: #fff;
    margin-right: 10px;
    ${Media.md} {
        font-size: 0.75rem
    }
`;

const PlicyLink = styled(Link)`
    font-weight: 500;
    line-height: 1.5em;
    font-family: Roboto,sans-serif;
    color: #fff;
    margin-right: 10px;
`;

const TermLink = styled(Link)`
    font-weight: 500;
    line-height: 1.5em;
    font-family: Roboto,sans-serif;
    color: #fff;
    position: relative;
    margin-left: 10px;
`;

const SocialIcon = styled(Link)`
    margin-left: 0.85rem;
    margin-right: 0.85rem;
    margin-top: 2rem;
`;

export default function Footer() {
    return (
        <CFooter>
            <H3>Subscribe to stay tuned for news and latest updates. No junk, spam free.</H3>
            <FooterLink to="/subscribe" >Subscribe</FooterLink>
            <Copyrigtht>
                <Span>© 2021 Nimmo Bay, All Rights Reserved.</Span>
                <PlicyLink to="#">Privacy Policy</PlicyLink>
                <TermLink to="#">Website by LeapXD</TermLink>
            </Copyrigtht>
            <SocialMedia>
                <SocialIcon to="#">
                    <img src="https://nimmobay.com/wp-content/uploads/2019/12/32-4.svg" height="24" width="24" alt="" />
                </SocialIcon>
                <SocialIcon to="#">
                    <img src="https://nimmobay.com/wp-content/uploads/2019/12/32-3.svg" height="18" width="22" alt="" />
                </SocialIcon>
                <SocialIcon to="#">
                    <img src="https://nimmobay.com/wp-content/uploads/2019/12/24-1.svg" height="18" width="22" alt="" />
                </SocialIcon>
            </SocialMedia>
        </CFooter>
    )
}