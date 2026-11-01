import React, { useEffect, useMemo, useState } from "react";
import {
  isRouteErrorResponse,
  useLocation,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";
import Header from "../src/Components/header";
import Footer from "../src/Components/footer";
import IsMobile from "ismobilejs";
import { cssVariables } from "../src/data/cssVariables";
import "./app.css";

export function meta() {
  return [
    { title: "Lianel Artiles" },
    { name: "description", content: "Portfolio, blog and full-stack experiments." },
  ];
}

export function links() {
  return [
    { rel: "icon", href: "/favicon.ico" },
    { rel: "manifest", href: "/manifest.json" },
  ];
}

function applyThemeVariables(darkMode) {
  if (typeof document === "undefined") {
    return;
  }

  const root = document.documentElement;
  const colors = getComputedStyle(root);
  const darkBackground = colors.getPropertyValue("--bg-img-dark");
  const darkPortrait = colors.getPropertyValue("--bg-img-portrait-dark");
  const lightBackground = colors.getPropertyValue("--bg-img-light");
  const lightPortrait = colors.getPropertyValue("--bg-img-portrait-light");

  cssVariables.forEach(({ name, darkModeValue, lightModeValue }) => {
    root.style.setProperty(name + "-dark", darkMode ? darkModeValue : lightModeValue);
  });

  root.style.setProperty("--bg-img-dark", darkMode ? darkBackground : lightBackground);
  root.style.setProperty(
    "--bg-img-portrait-dark",
    darkMode ? darkPortrait : lightPortrait
  );
}

function getInitialMode() {
  if (typeof window === "undefined") {
    return false;
  }

  const isReturningUser = "dark" in window.localStorage;
  const savedMode = JSON.parse(window.localStorage.getItem("dark") || "false");
  const userPrefersDark = window.matchMedia?.("(prefers-color-scheme: dark)")?.matches;

  if (isReturningUser) {
    return savedMode;
  }

  return Boolean(userPrefersDark);
}

export function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="title" content="Lianel Artiles Portfolio" />
        <Meta />
        <Links />
      </head>
      <body>
        <div id="root">{children}</div>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  const location = useLocation();
  const isBlog = location.pathname === "/blog" || location.pathname.startsWith("/blog/");
  const isHome = location.pathname === "/";
  const [darkMode, setDarkMode] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [languages, setLanguages] = useState({
    eng: true,
    esp: false,
    fre: false,
  });

  useEffect(() => {
    setDarkMode(getInitialMode());
    setIsMobile(IsMobile(window.navigator).any);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }
    window.localStorage.setItem("dark", JSON.stringify(darkMode));
    applyThemeVariables(darkMode);
  }, [darkMode]);

  useEffect(() => {
    document.documentElement.lang = languages.esp ? "es" : languages.fre ? "fr" : "en";
  }, [languages]);

  const portfolioContext = useMemo(
    () => ({
      darkMode,
      isMobile,
      languages,
      setDarkMode,
      setLanguages,
    }),
    [darkMode, isMobile, languages]
  );

  return (
    <div className={`App${isBlog ? " blog-layout" : isHome ? " home-layout" : ""}`} data-theme={darkMode ? "dark" : "light"}>
      <Header darkMode={darkMode} languages={languages} />
      <Outlet context={portfolioContext} />
      <Footer
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        languages={languages}
        setLanguages={setLanguages}
        isMobile={isMobile}
      />
    </div>
  );
}

export function ErrorBoundary({ error }) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (error instanceof Error) {
    details = error.message;
  }

  return (
    <main style={{ padding: "4rem 1rem" }}>
      <h1>{message}</h1>
      <p>{details}</p>
    </main>
  );
}
