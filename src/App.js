import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/global/Header";
import Navigation from "./components/global/Navigation";
import NavigationMenus from "./components/global/NavigationMenus";
import HomePageBanner from "./components/sections/HomePageBanner";
import WebFont from "webfontloader";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
}
body{
  font-family: Roboto;
}
`;

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
      `}
      </style>
      <Navigation handleNavToggle={handleNavToggle} />
      <Router>
        {navToggled ? (
          <NavigationMenus handleNavToggle={handleNavToggle} />
        ) : null}
        <Header />
        <HomePageBanner />
      </Router>
    </>
  );
}

export default App;
