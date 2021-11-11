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
    min-height: 70vh;
    object-fit: cover;
    ${Media.md} {
        min-height: 240px;
        padding: 5rem 0;
    }
`;

const ThumbCard = styled.div`
    margin-right: auto;
    margin-left: 0;
    width: 245px;
    height: 300px;
    margin-bottom: -180px;
    z-index: 2;
    transform: translate(5vw,-180px);
    ${Media.md} {
        width: 140px;
        height: 160px;
        transform: translate(10vw,-180px);
    }
`;
const Img = styled.img`
    width: 100%;
    height: 100%;
    position: absolute;
    object-fit: cover;
`;

export default function SectionL({ videoUrl, thumbUrl, title, content, buttonText, buttonLink, spacing, ...props }) {
    const SectionContent = styled.div`
        display: flex;
        min-height: 100vh;
        background: #eeebe5;
        padding-top: ${spacing ? "5rem" : 0};
        ${Media.xl} {
            flex-direction: column;
        }
    `;

    return (
        <SectionContent>
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
            <IntroPanel>
                <IntroBox
                    title={title}
                    content={content}
                    buttonText={buttonText}
                    buttonLink={buttonLink}

                />
            </IntroPanel>
        </SectionContent>
    )
}