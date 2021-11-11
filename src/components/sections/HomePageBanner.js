import Vimeo from "@u-wave/react-vimeo";
import BookNowButton from "./BookNowButton";
import styled, { keyframes } from "styled-components";
import Container from "./Container";
import Media from "../global/Media";
import { FaRegPlayCircle } from "react-icons/fa";
import { bounceInUp } from 'react-animations';
import ScrollAnimation from 'react-animate-on-scroll';

const bounceAnimation = keyframes`${bounceInUp}`;

const HomePageBannerWrapper = styled.section`
  width: 100%;
  min-height: 100vh;
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

const Text = styled.p`
  max-width: 40ch;
  font-size: 1.125rem;
  line-height: 1.75;
  color: #fff;
  animation: 1s ${bounceAnimation};
`;

const BannerText = styled.div`
  margin-top: 4rem;
  display: flex;
  justify-content: flex-end;
  animation: 1s ${bounceAnimation};
`;
const HomeTileImage = styled.img`
  max-width: 400px;
  ${Media.md}  {
    max-width: 400px;
  }
`;

const HomeContent = styled.div`
  display: block;
  padding-top: 11rem;
`;

const WatchLink = styled.a`
  font-size: 18px;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: #fff;
  display:flex;
  align-items: center;
  cursor: pointer;
  i {
    font-size: 20px;
    transform: translateY(3px);
    padding-right: 10px;
  }
  span {
    margin-left: 5px;
  }
  &:hover span {
    text-decoration: underline;
  }
`;


const HomePageBanner = () => (
  <HomePageBannerWrapper>
    <Vimeo
      className="custom-video"
      video="115783408"
      autoplay background showTitle={false}
      loop controls={false}
      muted={true}
    />
    <Container>
      <HomeContent>
        <HomeTileImage src="https://nimmobay.com/wp-content/themes/nimmo-bay/build/images/svg/Nimmo_Logo&Tag_M-L_WHITE.svg" alt="" style={{ width: "100%" }} />
        <BannerText>
          <div className="home-text">
            <ScrollAnimation animateIn="fadeInUp" >
              <Text>
                Awaken your senses at our intimate family-owned wilderness resort in the heart of Canada’s Great Bear Rainforest, on the wild shores of the Pacific Ocean, far from the everyday.
              </Text>
            </ScrollAnimation>
            <WatchLink>
              <FaRegPlayCircle />
              <span>Watch Full Video</span>
            </WatchLink>
          </div>
        </BannerText>
      </HomeContent>
    </Container>
    <BookNowButton />
  </HomePageBannerWrapper>
);

export default HomePageBanner;
