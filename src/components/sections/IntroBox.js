import styled from "styled-components"
import Media from "../global/Media"
import ScrollAnimation from 'react-animate-on-scroll';

const Section = styled.div`
    background-size: cover;
    transform: none;
`;

const LinkButton = styled.a`
    font-size: 14px;
    line-height: 23px;
    color: #2a3830;
    min-width: 0;
    background: none;
    border: none;
    font-weight: 700;
    font-size: 14px;
    line-height: 18px;
    letter-spacing: 2.57px;
    margin-bottom: 9px;
    text-transform: uppercase;
    display: inline-block;
    width: auto;
    padding: 0;
    line-height: 1.5;
    background: none;
    color: #333;
    position: relative;
    text-decoration: none;
    ::before {
        border-bottom: 2px solid #9b9b9b;
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        bottom: -9px;
        display: block;
        transition: all .3s ease-in-out;
    }
`;
const H3 = styled.h3`
    font-size: 1.375rem;
    font-weight: 400;
    line-height: 1.75;
    font-style: normal;
    font-family: Roboto,sans-serif!important;
    margin-bottom: 1rem;
    color: #2a3830;
    text-transform: uppercase;
    letter-spacing: 3px;
    margin: 0 0 20px;
    max-width: 510px;
    ${Media.md} {
        font-size: 1.125rem;
    }
    ${Media.lg} {
        max-width: 1200px;
    }
`;

const BlockButton = styled.div`
    padding-top: 15px;
    margin-left: 68px;
    ${Media.md} {
        font-size: 1rem;
        margin-left: 0;
    }
`;


export default function IntroBox({ title, content, buttonText, buttonLink, ...props }) {
    const P = styled.p`
        margin-left: 68px;
        margin-bottom: 1.5rem!important;
        font-size: 1rem;
        font-style: normal;
        font-weight: 400;
        line-height: 1.7em;
        margin-top: 0;
        color: #666;
        max-width: 444px;
        ${Media.md} {
            font-size: 1rem;
            margin-left: 0;
        }
        ${Media.lg} {
            max-width: 1200px;
        }
    `;
    return (
        <Section>
            <ScrollAnimation animateIn="fadeInUp" >
                <H3>{title}</H3>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeInUp" >
                <P>{content}</P>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeInUp" >
                <BlockButton>
                    <LinkButton href={buttonLink}>{buttonText}</LinkButton>
                </BlockButton>
            </ScrollAnimation>
        </Section>
    )
}