import Vimeo from "@u-wave/react-vimeo";
import BookNowButton  from "./BookNowButton";
import styled from "styled-components";

const HomePageBannerWrapper = styled.section `
  .custom-video {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    pointer-events: none;
    overflow: hidden;
    iframe {
      width: 100vw;
      height: 56.25vw; /* Given a 16:9 aspect ratio, 9/16*100 = 56.25 */
      min-height: 100vh;
      min-width: 177.77vh; /* Given a 16:9 aspect ratio, 16/9*100 = 177.77 */
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;

const HomePageBanner = () => ( 
  <HomePageBannerWrapper>
    <Vimeo 
      className = "custom-video"
      video = "115783408"
      autoplay background showTitle = { false }
      loop controls = { false }
      muted = { true }
    />   
    <BookNowButton />
  </HomePageBannerWrapper>
);

export default HomePageBanner;
