import styled from "styled-components"
import Media from "../global/Media";
import ScrollAnimation from 'react-animate-on-scroll';

const Section = styled.div`
    background-size: cover;
    background-image: url(https://live-nimmobay.pantheonsite.io/wp-content/uploads/2020/01/lonely-Island-1537x1080.jpg);
    background-repeat: no-repeat;
    width: 100%;
    max-width: 100%;
    overflow: hidden;
`;

const SectionContent = styled.div`
    background: #eeebe6;
    max-width: 1077px;
    padding: 28px;
    margin: 102px auto;
    padding: 6.375rem;
    width: calc(100% - 25rem);
    ${Media.md} {
        padding: 3rem 1.5rem;
        width: calc(100% - 9rem);
    }
`;

const Figure = styled.figure`
    display: flex;
    justify-content: center;
`;

const H3 = styled.h3`
    font-size: 1.375rem;
    font-weight: 400;
    line-height: 1.75;
    font-style: normal;
    text-align: center;
    letter-spacing: 3px;
    color: #2a3830;
    ${Media.md} {
        text-align: left;
    }
`;

const P = styled.p`
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.7em;
    margin-top: 0;
    color: #666;
    text-align: center;
    max-width: 600px;
    margin-right: auto;
    margin-left: auto;
    ${Media.md} {
        text-align: left;
        font-size: 1rem;
    }
`;

const Link = styled.a`
    padding: .75rem 1.5rem;
    margin-left: .25rem;
    margin-right: .25rem;
    font-size: .875rem;
    border-color: #2a3830;
    text-decoration: none;
    position: relative;
    border: 2px solid #2a3830;
    border-radius: 0;
    padding: .75rem 1.5rem;
    color: #2a3830;
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
        background-color: #2a3830;
        color: #fff;
    }
`;
const SectionContentText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align:center
`;

const Div = styled.div`
    display: block;
`;

export default function Section3() {
    return (
        <Section>
            <SectionContent>
                <SectionContentText>
                    <Div>
                        <ScrollAnimation animateIn="fadeInUp" >
                            <Figure>
                                <img src="https://live-nimmobay.pantheonsite.io/wp-content/uploads/2020/03/Cabins2.svg" alt="Cabins at Nimmo Bay Resort" width="236" />
                            </Figure>
                        </ScrollAnimation>
                    </Div>

                    <ScrollAnimation animateIn="fadeInUp" >
                        <H3>REDISCOVER THE WILD WITHIN</H3>
                    </ScrollAnimation>

                    <ScrollAnimation animateIn="fadeInUp" >
                        <P>If you can imagine
                            it, our team can make it happen. We welcome guests as individuals, couples, groups and families, with inclusive
                            packages covering accommodation, dining, drinks, and a range of activities. Our trip experience team will then
                            work with you to enhance your stay with unforgettable adventures and moments of reflection, ensuring your
                            expectations are more than exceeded.</P>
                    </ScrollAnimation>

                    <ScrollAnimation animateIn="fadeInUp" >
                        <Div>
                            <Link href="https://nimmobay.com/trip-rates-details/">PLAN YOUR TRIP</Link>
                        </Div>
                    </ScrollAnimation>
                </SectionContentText>
            </SectionContent>
        </Section>
    )
}