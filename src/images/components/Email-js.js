import React from "react";
import PropTypes from "prop-types";

const Download = (props) => {
  const { darkMode, colors } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 510.88 512"
      className="Logo_image__246BE"
    >
      <rect
        x="270.57"
        width="240.31"
        height="240.31"
        rx="24"
        fill="inherit"
      ></rect>
      <path
        d="M215.12 254.73V68.5a29.16 29.16 0 0 0-8.55-20.64 29.19 29.19 0 0 0-41.28 0L16.18 197a55.27 55.27 0 0 0 0 78.14l220.71 220.68a55.27 55.27 0 0 0 78.14 0l149.11-149.11a29.19 29.19 0 0 0 0-41.28l-1.14-1.12a29.16 29.16 0 0 0-20.64-8.55H256.15a41 41 0 0 1-41.03-41.03z"
        fill={darkMode ? colors.dark : colors.light}
      ></path>
    </svg>
  );
};

Download.propTypes = {
  darkMode: PropTypes.bool,
  colors: PropTypes.object,
  size: PropTypes.object,
};

export default Download;
