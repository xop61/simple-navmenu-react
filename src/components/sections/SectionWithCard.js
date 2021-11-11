import styled from 'styled-components'
import IntroBox from './IntroBox';
import Media from '../global/Media';
import ScrollAnimation from 'react-animate-on-scroll';

const SectionCardContent = styled.div`
    position: relative;
    margin-top: -8px! important;
    padding-top: 10rem! important;
    background-size: unset!important;
    background-position: 100% 0;
    background-repeat: repeat;
    background-image: url(https://nimmobay.com/wp-content/themes/nimmo-bay/build/images/jpg/paper-texture_repeating.jpg);
    ::before {
        content: "";
        background-image: url(https://nimmobay.com/wp-content/themes/nimmo-bay/build/images/png/paper-texture-top.png);
        width: 100%;
        background-repeat: repeat-x;
        background-size: 700px;
        background-position: 0 0;
        height: 60px;
        position: absolute;
        left: 0;
        top: -56px;
    }
    display: flex;
    justify-content: space-between;
    padding-right: 5rem;
    padding-left: 5rem;
    padding-bottom: 18rem;
    ${Media.xl} {
        flex-direction: column-reverse;
        padding-right: 1.5rem;
        padding-left: 1.5rem;
    }
`;


const SectionBody = styled.div`
    width: 40%;
    ${Media.xl} {
        width: 100%;
        margin-top: 5rem;
    }
    ${Media.md} {
        margin-top: 1rem;
    }
`;


const CardBody = styled.div`
    width: 60%
    display: flex;
    justify-content: flex-end;
    ${Media.xl} {
        justify-content: flex-end;
        display: flex;
    }
`;

const ImgMain = styled.img`
    width: 100%;
    max-width: 770px;
    max-height: 480px;
    object-fit: cover;
    ${Media.xl} {
        max-width: 810px;
        max-height: 650px;
        margin-right: 0;
        margin-left: auto;
    }
    ${Media.md} {
        max-width: 340px;
    }
`;

const Card = styled.div`
    z-index: 5;
    position: absolute;
    left: 43%;
    top: 2rem;
    ${Media.xl} {
        left: 0;
        top: -20px;
    }
`;

const CardMain = styled.div`
   
    transform: rotate(4deg);
    background-image: url(https://nimmobay.com/wp-content/themes/nimmo-bay/build/images/png/Portrait-old-photo-with-shadow.png);
    background-size: contain;
    background-repeat: no-repeat;
    padding: 50px;
    max-width: 396px;
    ${Media.xl} {
        padding: 36px;
        max-width: 220px;
    }
    ${Media.md} {
        padding: 25px;
        max-width: 150px;
    }
`;
const CardImg = styled.img`
    display: block;
    width: 100%;
    max-width: 100%;
    height: auto;
    box-sizing: border-box;
`;

const H4 = styled.h4`
    font-size: 1.125rem;
    font-weight: 600;
    line-height: 1.75;
    font-style: normal;
    margin-bottom: 1rem;
    color: #393939;
    text-transform: uppercase;
    letter-spacing: 2px;
`;

export default function SectionWithCard() {
    return (
        <SectionCardContent>
            <SectionBody>
                <ScrollAnimation animateIn="fadeInUp" >
                    <H4>NATURAL BORN LEADERS</H4>
                </ScrollAnimation>
                <IntroBox
                    title="Find Yourself In True West Coast Wilderness"
                    content="In our busy modern lives, true nature can feel out of reach. We invite you to leave it all behind and welcome
                    reconnection – with the wild, with each other, with yourself. Our remote luxury retreat location offers
                    world-renowned customized wilderness, wildlife, culinary and wellness experiences."
                    buttonText="Explore Nimmo"
                    buttonLink="https://nimmobay.com/welcome-to-nimmo-bay/"

                />
            </SectionBody>
            <CardBody>
                <ScrollAnimation animateIn="fadeIn" >
                    <ImgMain src="https://nimmobay.com/wp-content/uploads/2020/03/5D186471-1.jpg" alt="" />
                    <Card>
                        <CardMain>
                            <CardImg src="https://nimmobay.com/wp-content/uploads/2020/03/Clayton-Spizawka-300x415.jpg" alt="" />
                        </CardMain>
                    </Card>
                </ScrollAnimation>
            </CardBody>
        </SectionCardContent>
    )
}