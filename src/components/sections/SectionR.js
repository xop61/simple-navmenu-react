import styled from "styled-components";
import Media from "../global/Media";
import IntroBox from "./IntroBox";
import ScrollAnimation from 'react-animate-on-scroll';

const VideoPreview = styled.div`
    width: 55%;
    ${Media.xl} {
        width: calc(100vw - 5rem)
    }
    ${Media.md} {
        width: calc(100vw - 2rem)
    }
`;

const IntroPanel = styled.div`
    width: calc(45% - 12rem);
    display: flex;
    align-items: center;
    padding: 0 6rem;
    ${Media.xl} {
        width: calc(100% - 12rem);
        padding-top: 5rem;
        padding-bottom: 5rem;
    }
    ${Media.md} {
        width: calc(100% - 3rem);
        padding: 5rem 1.5rem;
    }
`;

const Video = styled.video`
    width: 100%;
    margin-top: 4rem;
    object-fit: cover;
    ${Media.md} {
        min-height: 240px;
        padding: 5rem 0;
        padding-top: 0;
    }
`;

const ThumbCard = styled.div`
    margin-left: auto;
    width: 245px;
    height: 300px;
    margin-bottom: -180px;
    z-index: 2;
    margin-right: 9rem;
    -webkit-transform: translate(5vw,-180px);
    -ms-transform: translate(5vw,-180px);
    transform: translate(5vw,-180px);
    ${Media.md} {
        width: 140px;
        height: 160px;
        margin-right: 4rem;
    }
`;
const Img = styled.img`
    width: 100%;
    height: 100%;
    position: absolute;
    object-fit: cover;
`;

export default function SectionR({ videoUrl, thumbUrl, title, content, buttonText, spacing, buttonLink, ...props }) {

    const SectionContent = styled.div`
        display: flex;
        min-height: 100vh;
        background: #eeebe5;
        padding-bottom: ${spacing ? "10rem" : 0};
        ${Media.xl} {
            flex-direction: column-reverse;
        }
    `;
    return (
        <SectionContent>
            <IntroPanel>
                <IntroBox
                    title={title}
                    content={content}
                    buttonText={buttonText}
                    buttonLink={buttonLink}

                />
            </IntroPanel>
            <VideoPreview>

                <ScrollAnimation animateIn="fadeIn" >
                    <Video src={videoUrl} autoPlay></Video>
                </ScrollAnimation>

                <ScrollAnimation animateIn="fadeIn" >
                    <ThumbCard>
                        <Img src={thumbUrl} alt="" />
                    </ThumbCard>
                </ScrollAnimation>
            </VideoPreview>
        </SectionContent>
    )
}