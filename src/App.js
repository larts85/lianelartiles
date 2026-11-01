/* ======================= IMPORTATIONS ======================= */
import "./App.css";
import { HashRouter as Router, Route } from "react-router-dom";
import LandingPage from "./Components/landingPage";
import Header from "./Components/header";
import Footer from "./Components/footer";
import React, { useState, useEffect } from "react";
import About from "./Components/aboutMe";
import Contact from "./Components/contactme";
import Education from "./Components/education";
import Projects from "./Components/projects";
import Resume from "./Components/resume";
import Skills from "./Components/skills";
import IsMobile from "ismobilejs";
import { cssVariables } from "./data/cssVariables";

function App() {
  /* ======================= STATE & VARS ======================= */
  const [darkMode, setDarkMode] = useState(getInitialMode());
  const [isMobile, setIsMobile] = useState(false);
  const [languages, setLanguages] = useState({
    eng: true,
    esp: false,
    fre: false,
  });

  const html = document.documentElement;
  const colors = getComputedStyle(document.documentElement);

  /* ======================= FUNCTIONS ======================= */
  useEffect(() => {}, []);

  useEffect(() => {
    const userAgent = window.navigator;
    setIsMobile(IsMobile(userAgent).any);
  }, []);

  useEffect(() => {
    localStorage.setItem("dark", JSON.stringify(darkMode));
  }, [darkMode]);

  useEffect(() => {
    switchMode();
    // eslint-disable-next-line
  }, [darkMode]);

  const bgImgDark = colors.getPropertyValue("--bg-img-dark");
  const bgImgPortraitDark = colors.getPropertyValue("--bg-img-portrait-dark");
  const bgimgLight = colors.getPropertyValue("--bg-img-light");
  const bgImgPortraitLight = colors.getPropertyValue("--bg-img-portrait-light");

  const setCSSVariables = (mode) => {
    cssVariables.forEach(({ name, darkModeValue, lightModeValue }) => {
      const cssProperty = `${name}-dark`;
      const value = mode === "dark" ? darkModeValue : lightModeValue;
      html.style.setProperty(cssProperty, value);
    });
  };

  const switchMode = () => {
    if (darkMode) {
      setCSSVariables("dark");
      html.style.setProperty("--bg-img-dark", bgImgDark);
      html.style.setProperty("--bg-img-portrait-dark", bgImgPortraitDark);
    } else {
      setCSSVariables("light");
      html.style.setProperty("--bg-img-dark", bgimgLight);
      html.style.setProperty("--bg-img-portrait-dark", bgImgPortraitLight);
    }
  };

  function getInitialMode() {
    const isReturningUser = "dark" in localStorage;
    const savedMode = JSON.parse(localStorage.getItem("dark"));
    const userPrefersDark = getPrefColorScheme();
    // if mode was saved --> dark / light
    if (isReturningUser) {
      return savedMode;
      // if preferred color scheme is dark --> dark
    } else if (userPrefersDark) {
      return true;
      // otherwise --> light
    } else {
      return false;
    }
  }
  function getPrefColorScheme() {
    if (!window.matchMedia) return;
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  }
  /* ======================= RENDERING ======================= */
  return (
    <div className="App">
      <Router>
        <Route path="/">
          <Header darkMode={darkMode} languages={languages} />
        </Route>
        <Route exact path="/">
          <LandingPage languages={languages} />
        </Route>
        <Route path="/about">
          <About languages={languages} />
        </Route>
        <Route path="/contact">
          <Contact languages={languages} />
        </Route>
        <Route path="/education">
          <Education languages={languages} darkMode={darkMode} />
        </Route>
        <Route path="/projects">
          <Projects
            languages={languages}
            darkMode={darkMode}
            isMobile={isMobile}
          />
        </Route>
        <Route path="/resume">
          <Resume languages={languages} />
        </Route>
        <Route path="/skills">
          <Skills languages={languages} />
        </Route>
        <Route path="/">
          <Footer
            darkMode={darkMode}
            setDarkMode={setDarkMode}
            languages={languages}
            setLanguages={setLanguages}
            isMobile={isMobile}
          />
        </Route>
      </Router>
    </div>
  );
}

export default App;
