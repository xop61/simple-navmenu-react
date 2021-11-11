import { Link } from "react-router-dom";
import styled from "styled-components"
import MediaMin from "../global/MediaMin";
import ScrollAnimation from 'react-animate-on-scroll';

const Section = styled.div`
    background-size: cover;
    background-image: url(https://live-nimmobay.pantheonsite.io/wp-content/uploads/2020/02/Background-image-top-1740x1080.jpg);
    background-repeat: no-repeat;
    transform: none;
    width: 100%;
    overflow: hidden;
    ${MediaMin.xl} {
        width: 100%;
    }
`;

const SectionContent = styled.div`
    background-size:uk-background-contain;
    background-image:url('https://live-nimmobay.pantheonsite.io/wp-content/uploads/2020/01/Nimmo-Map-PLACE-HOLDER.svg');
    width: 100%;
    max-width: 100%;
    overflow: hidden;
    background-repeat:no-repeat;
    background-position: right -85px;
    background-size: 84%;
    padding: 170px 1rem;
    background-position: 100% 0;
    background-size: 65%;
    
    ${MediaMin.lg} {
        padding: 170px 0;
        background-position: 100% 0;
        background-size: 65%;
    }
    ${MediaMin.md} {
        padding: 102px 0;
        background-position: 300px -228px;
    }
`;

const ContentBodyM = styled.div`
    background-size: cover;
    transform: none;
    ${MediaMin.xl} {
        width: 100%;
    }
    ${MediaMin.md} {
        padding-left: 1.5rem;
    }
`;

const Row = styled.div`
    display: flex;
    flex-wrap: wrap;
    height: 100%;
    margin: 0;
`;
const Content = styled.div`
    ${MediaMin.lg} {
        width: calc(((100% - ((12 / 5) * 0px)) / 12) * 5);
        margin: 0;
        padding: 0;
    }
    ${MediaMin.md} {
        width: calc(((100% - ((12 / 8) * 0px)) / 12) * 8);
        margin: 0;
        padding-left: 3rem;
        padding: 0;
    }
    ${MediaMin.xl} {
        width: calc(((100% - ((12 / 5) * 10px)) / 12) * 5);
        margin: 5px;
        padding: 0;
        height: 100%;
    }
`;
const ContentBody = styled.div`
    background-size: cover;
    transform: none;
    display: flex;
    flex: 1 1 0;
    padding: 0;
    align-items: center;
    justify-content: center;
    ${MediaMin.md} {
        padding: 3rem;
    }
    ${MediaMin.xl} {
        flex-direction: column;
    }
`;

const Card = styled.div`
    
    ${MediaMin.sm} {
        width: calc(((100% - ((12 / 5) * 0px)) / 12) * 5);
        margin: 0;
        padding: 0;
    }
    ${MediaMin.xl} {
        display: block;
        width: calc(((100% - ((12 / 7) * 0px)) / 12) * 7);
        margin: 0;
        padding: 0;
    }
`;

const ButtonLink = styled.div`
    padding-top: 15px;
    margin-left: 0;
    ${MediaMin.sm} {
        margin-left: 68px;
    }
`;

const Button = styled(Link)`
    padding: 0;
    line-height: 1.5;
    background: none;
    color: #333;
    position: relative;
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
    text-decoration: none;
    ${MediaMin.md} {
        font-size: 14px;
        line-height: 23px;
    }
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
    font-family: Roboto,sans-serif!important;
    margin: 0 0 20px;
    font-size: 1.125rem;
    font-weight: 400;
    line-height: 1.75;
    font-style: normal;
    margin-top: 2rem;
    margin-bottom: 1rem;
    color: #2a3830;
    text-transform: uppercase;
    letter-spacing: 3px;
    ${MediaMin.md} {
        font-size: 1.375rem;
        font-weight: 400;
        line-height: 1.75;
        font-style: normal;
    }
`;
const P = styled.p`
    
    font-family: Roboto,sans-serif;
    margin: 0 0 20px;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.7em;
    font-style: normal;
    margin-top: 0;
    margin-bottom: 1rem;
    ${MediaMin.sm} {
        font-size: 1.125rem;
        font-style: normal;
        font-weight: 400;
        line-height: 1.7em;
        margin-top: 0;
        margin-left: 68px;
    }
    
`;

const CardContent = styled.div`
    background-size: cover;
    transform: none;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    height: 100%;
    padding-bottom: 60px;
    ${MediaMin.lg} {
        align-items: center;
    }
    ${MediaMin.md} {
        justify-content: flex-end;
        padding-left: 1.5rem;
    }
    ${MediaMin.xl} {
        width: 100%;
    }
`;
const CardImage = styled.div`
    position: relative;
    transform: rotate(4deg) scale(1);
    background-image: url(https://nimmobay.com/wp-content/themes/nimmo-bay/build/images/png/square-old-photo-with-shadow.png);
    background-size: contain;
    background-repeat: no-repeat;
    padding: 50px;
    max-width: 396px;
    display: none;
    ${MediaMin.xl} {
        display: block;
    }
`;

const Imag = styled.img`
    display: block;
    width: 100%;
    max-width: 100%;
    height: auto;
    box-sizing: border-box;
`;

export default function Section2() {
    return (
        <Section>
            <SectionContent>
                <Row>
                    <Content>
                        <ContentBody>
                            <ContentBodyM>
                                <ScrollAnimation animateIn="fadeInUp" >
                                    <H3>Find Yourself In True West Coast Wilderness</H3>
                                    <P>In our busy modern lives, true nature can feel out of reach. We invite you to leave it all
                                        behind and welcome reconnection – with the wild, with each other, with yourself. Our remote
                                        luxury retreat location offers world-renowned customized wilderness, wildlife, culinary and
                                        wellness experiences. </P>
                                    <ButtonLink>
                                        <Button to="https://nimmobay.com/welcome-to-nimmo-bay/">Explore Nimmo</Button>
                                    </ButtonLink>
                                </ScrollAnimation>
                            </ContentBodyM>
                        </ContentBody>
                    </Content>
                    <Card>
                        <CardContent>
                            <ScrollAnimation animateIn="fadeIn" >
                                <CardImage>
                                    <Imag src="https://nimmobay.com/wp-content/uploads/2020/01/World-Map-image-20-300x300.jpg"
                                        alt="Nimmo Bay on the map" />
                                </CardImage>
                            </ScrollAnimation>
                        </CardContent>
                    </Card>
                </Row>
            </SectionContent>
        </Section>
    )
}