import styled from "styled-components"
import Container from "./Container";
import ScrollAnimation from 'react-animate-on-scroll';
import Media from "../global/Media";

const Section = styled.div`
    background-size: cover;
    background-image: url(https://nimmobay.com/wp-content/uploads/2020/12/CTA-image-mountain-1620x1080.png);
    background-repeat: no-repeat;
    padding-bottom: 10rem;
    margin-top: -18rem;
    position: relative;
    ${Media.md} {
        padding-bottom: 4rem;
    }
`;

const H2 = styled.h2`
    color: #f1f1f2;
    text-align: left;
    font-size: 2.1875rem;
    line-height: 1.75;
    font-style: normal;
    letter-spacing: 4px;
    font-weight: 100;
    ${Media.md} {
        font-size: 1.5rem;
    }
`;

const P = styled.p`
    color: #f1f1f2;
    margin-bottom: 1.5rem!important;
    text-align: left;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.7em;
    margin-top: 0;
    margin: 0 0 20px;
    max-width: 760px;
    ${Media.md} {
        font-size: 1rem;
    }
`;

const Link = styled.a`
    padding: .75rem 1.5rem;
    margin-left: .25rem;
    margin-right: .25rem;
    font-size: .875rem;
    border-color: #fff;
    text-decoration: none;
    position: relative;
    border: 2px solid #fff;
    border-radius: 0;
    padding: .75rem 1.5rem;
    color: #fff;
    background-color: transparent;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: .14286em;
    text-align: center;
    display: inline-block;
    min-width: 20ch;
    margin-left: .25rem;
    margin-right: .25rem;
    margin-top: 2rem;
    font-size: .875rem;
    font-weight: 700;
    transition: background-color .2s ease-out,border-color .2s ease-out,color .2s ease-out;
    &:hover {
        background-color: #fff;
        border-color: #fff;
        color: #333;
    }
`;
const Div = styled.div`
    display: block;
`;
const DivContent = styled.div`
    padding-top: 25rem;
    ${Media.md} {
        padding-top: 16rem;
    }
`;
export default function SectionLast() {
    return (
        <Section>
            <Container>

                <DivContent>
                    <ScrollAnimation animateIn="fadeInUp" >
                        <H2>READY FOR AN ADVENTURE?</H2>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="fadeInUp" >
                        <P>Book your trip today with the help of our expert concierge team. They will answer any questions and help you customize your package to reflect your ultimate vision for a wild getaway you won’t soon forget. </P>
                    </ScrollAnimation>
                </DivContent>

                <ScrollAnimation animateIn="fadeInUp" >
                    <Div>
                        <Link href="https://nimmobay.com/trip-rates-details/">PLAN YOUR TRIP</Link>
                    </Div>
                </ScrollAnimation>
            </Container>
        </Section>
    )
}