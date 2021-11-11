import { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/global/Header";
import Navigation from "./components/global/Navigation";
import NavigationMenus from "./components/global/NavigationMenus";
import HomePageBanner from "./components/sections/HomePageBanner";
import WebFont from "webfontloader";
import Section2 from "./components/sections/Section2";
import Section3 from "./components/sections/Section3";
import SectionL from "./components/sections/SectionL";
import SectionR from "./components/sections/SectionR";
import SectionWithCard from "./components/sections/SectionWithCard";
import SectionLast from "./components/sections/SectionLast";
import Footer from "./components/global/Footer";
import "./css/animate.css";

function App() {
  const [navToggled, setNavToggled] = useState(false);

  const handleNavToggle = () => {
    setNavToggled(!navToggled);
  };

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto"],
      },
    });
  }, []);

  return (
    <>
      <style jsx global>{`
        body {
          margin: 0px;
          padding: 0px;
        }
        p, a, h1, h2, h3, h4{
          font-family: Roboto,sans-serif;
        }
      `}
      </style>
      <Navigation handleNavToggle={handleNavToggle} />
      <Router>
        {navToggled ? (
          <NavigationMenus handleNavToggle={handleNavToggle} />
        ) : null}
        <Header />
        <HomePageBanner />
        <Section2 />
        <Section3 />
        <SectionL
          videoUrl="https://nimmobay.com/wp-content/uploads/2020/03/Nimmo-Wildlife-Video_720.mp4"
          thumbUrl="https://nimmobay.com/wp-content/uploads/2020/01/Whales-IMG_2805.jpg"
          title="Find Yourself In True West Coast Wilderness"
          content="In our busy modern lives, true nature can feel out of reach. We invite you to leave it all behind and welcome
          reconnection – with the wild, with each other, with yourself. Our remote luxury retreat location offers
          world-renowned customized wilderness, wildlife, culinary and wellness experiences."
          buttonText="Explore Nimmo"
          buttonLink="https://nimmobay.com/welcome-to-nimmo-bay/"
          spacing={true}

        />
        <SectionR
          videoUrl="https://nimmobay.com/wp-content/uploads/2020/05/Nimmo-Culinary-720-2.mp4"
          thumbUrl="https://nimmobay.com/wp-content/uploads/2021/07/R5216608_adobespark.jpeg"
          title="Find Yourself In True West Coast Wilderness"
          content="In our busy modern lives, true nature can feel out of reach. We invite you to leave it all behind and welcome
          reconnection – with the wild, with each other, with yourself. Our remote luxury retreat location offers
          world-renowned customized wilderness, wildlife, culinary and wellness experiences."
          buttonText="Explore Nimmo"
          buttonLink="https://nimmobay.com/welcome-to-nimmo-bay/"
          spacing={false}
        />
        <SectionL
          videoUrl="https://nimmobay.com/wp-content/uploads/2020/05/Nimmo-Adventure-2_720.mp4"
          thumbUrl="https://nimmobay.com/wp-content/uploads/2021/07/Ocean-5D183591_adobespark.jpeg"
          title="Find Yourself In True West Coast Wilderness"
          content="In our busy modern lives, true nature can feel out of reach. We invite you to leave it all behind and welcome
          reconnection – with the wild, with each other, with yourself. Our remote luxury retreat location offers
          world-renowned customized wilderness, wildlife, culinary and wellness experiences."
          buttonText="Explore Nimmo"
          buttonLink="https://nimmobay.com/welcome-to-nimmo-bay/"

        />
        <SectionR
          videoUrl="https://nimmobay.com/wp-content/uploads/2020/03/Nimmo-Wellness-Video_2_720.mp4"
          thumbUrl="https://nimmobay.com/wp-content/uploads/2020/03/5D186099.jpg"
          title="Find Yourself In True West Coast Wilderness"
          content="In our busy modern lives, true nature can feel out of reach. We invite you to leave it all behind and welcome
          reconnection – with the wild, with each other, with yourself. Our remote luxury retreat location offers
          world-renowned customized wilderness, wildlife, culinary and wellness experiences."
          buttonText="Explore Nimmo"
          buttonLink="https://nimmobay.com/welcome-to-nimmo-bay/"
          spacing={true}
        />
        <SectionWithCard />
        <SectionLast />
        <Footer />
      </Router>
    </>
  );
}

export default App;
