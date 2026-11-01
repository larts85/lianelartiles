import React, { useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import ReactPlayer from "react-player";

const PlayerModal = (props) => {
  const { videoTitle, open, setOpen, darkMode, playerProps } = props;

  const modalStyle = {
    display: open ? "flex" : "none",
    flexDirection: "column",
    position: "fixed",
    top: "50%",
    left: "50%",
    transition: "300ms ease-in-out",
    transform: open
      ? "translate(-50%, -50%) scale(1)"
      : "translate(-50%, -50%) scale(0)",
    boxShadow: "none",
    zIndex: 100,
  };
  const headerStyle = {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: darkMode ? "#292a2e" : "#b8b8b8",
    background:
      "linear-gradient(180deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 100%), #B8B8B8",
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    borderBottom: `solid 1px ${darkMode ? "#292a2e" : "#b8b8b8"}`,
  };
  const titleStyle = {
    color: darkMode ? "#fff" : "#292a2e",
    paddingLeft: 15,
  };
  const closeButtonStyle = {
    color: darkMode ? "#fff" : "#292a2e",
    backgroundColor: "transparent",
    border: "none",
    fontSize: 28,
    cursor: "pointer",
    fontWeight: "bold",
    outline: "none",
    paddingRight: 15,
  };

  useEffect(() => {
    document.addEventListener("keydown", escFunction, false);
    return () => {
      document.removeEventListener("keydown", escFunction, false);
    };
    //eslint-disable-next-line
  }, []);

  const escFunction = useCallback((event) => {
    if (event.key === "Escape") {
      setOpen(false);
    }
    //eslint-disable-next-line
  }, []);

  return (
    <div style={modalStyle}>
      <div style={headerStyle}>
        <h1 style={titleStyle}>{videoTitle}</h1>
        <button style={closeButtonStyle} onClick={() => setOpen(!open)}>&times;</button>
      </div>
      <div>
        <ReactPlayer {...playerProps} />
      </div>
    </div>
  );
};

PlayerModal.propTypes = {
  videoTitle: PropTypes.string,
  playerProps: PropTypes.object,
  open: PropTypes.bool,
  setOpen: PropTypes.func,
  darkMode: PropTypes.bool,
};

export default PlayerModal;
