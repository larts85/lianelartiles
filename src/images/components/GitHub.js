import React from "react";
import PropTypes from "prop-types";

const GitHub = (props) => {
  const { darkMode, colors, size } = props;
  return (
    <svg
      width={size.width}
      height={size.height}
      viewBox="0 0 55 54"
      fill="none"
    >
      <g id="github">
        <path
          id="Vector"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M27.2238 0C12.1905 0 0 12.1878 0 27.2238C0 39.2524 7.80044 49.4566 18.6173 53.0568C19.9774 53.3092 20.4769 52.4662 20.4769 51.7471C20.4769 51.098 20.4516 48.9534 20.4399 46.6786C12.8662 48.3255 11.2681 43.4666 11.2681 43.4666C10.0297 40.3199 8.24539 39.4832 8.24539 39.4832C5.77493 37.7935 8.43158 37.8287 8.43158 37.8287C11.1649 38.0203 12.6048 40.6341 12.6048 40.6341C15.0328 44.7951 18.9734 43.5924 20.5269 42.8972C20.7713 41.1377 21.4768 39.9363 22.2553 39.2564C16.2086 38.5689 9.85164 36.2342 9.85164 25.8028C9.85164 22.8306 10.9156 20.402 12.6571 18.4951C12.3739 17.8099 11.4421 15.041 12.9203 11.2911C12.9203 11.2911 15.206 10.5594 20.4084 14.0816C22.5804 13.478 24.9097 13.1746 27.2238 13.1642C29.5364 13.1746 31.8671 13.4771 34.0432 14.0807C39.2393 10.5585 41.5222 11.2902 41.5222 11.2902C43.0041 15.0396 42.0722 17.809 41.7896 18.4942C43.5351 20.4011 44.5914 22.8297 44.5914 25.8019C44.5914 36.2581 38.2227 38.5599 32.1606 39.2343C33.1375 40.0792 34.0076 41.7364 34.0076 44.2758C34.0076 47.9184 33.976 50.85 33.976 51.7467C33.976 52.4711 34.4665 53.32 35.846 53.0527C46.6565 49.4489 54.448 39.2479 54.448 27.2238C54.4475 12.1887 42.2584 0.000450781 27.2238 0.000450781V0Z"
          fill={darkMode ? colors.dark : colors.light}
        />
        <path
          id="Vector_2"
          d="M10.311 39.0869C10.251 39.2222 10.0383 39.2628 9.8444 39.1703C9.64605 39.082 9.5356 38.8976 9.59961 38.7619C9.65822 38.6221 9.87145 38.5838 10.0685 38.6771C10.2668 38.766 10.3795 38.9521 10.3105 39.0874L10.311 39.0869ZM11.4137 40.3172C11.2843 40.4376 11.0305 40.3817 10.8583 40.191C10.6798 40.0016 10.6464 39.7478 10.7785 39.6257C10.9128 39.5057 11.159 39.5625 11.3375 39.7519C11.5151 39.9439 11.5503 40.1955 11.4141 40.3177L11.4137 40.3172ZM12.4875 41.8847C12.3207 42.001 12.0475 41.8924 11.8789 41.6503C11.7121 41.4077 11.7121 41.117 11.8834 41.0011C12.0516 40.8848 12.3207 40.9898 12.492 41.2297C12.6579 41.4753 12.6579 41.7661 12.4875 41.8842V41.8847ZM13.9576 43.3999C13.8089 43.5644 13.4906 43.5202 13.258 43.2962C13.0204 43.0766 12.9541 42.7642 13.1033 42.6001C13.2548 42.4351 13.5744 42.4811 13.8084 42.7038C14.046 42.9229 14.1177 43.2358 13.9585 43.3994L13.9576 43.3999ZM15.9863 44.2794C15.92 44.4926 15.6144 44.5896 15.3056 44.4985C14.9977 44.4052 14.7961 44.1559 14.8593 43.9404C14.9224 43.7254 15.2303 43.6248 15.5409 43.7218C15.8488 43.8146 16.0503 44.0626 15.9863 44.2794ZM18.2147 44.4422C18.2223 44.6667 17.9609 44.8524 17.6376 44.8569C17.3117 44.8646 17.048 44.6824 17.0448 44.4615C17.0448 44.2348 17.3009 44.0513 17.6264 44.045C17.9496 44.0391 18.2151 44.2195 18.2151 44.4417L18.2147 44.4422ZM20.2875 44.0896C20.3263 44.3083 20.1013 44.5332 19.7799 44.5932C19.4643 44.6518 19.1713 44.5156 19.1307 44.2988C19.092 44.0743 19.321 43.8493 19.6365 43.7912C19.9584 43.7357 20.2469 43.8678 20.2875 44.0901V44.0896Z"
          fill={darkMode ? colors.dark : colors.light}
        />
      </g>
    </svg>
  );
};

GitHub.propTypes = {
  darkMode: PropTypes.bool,
  colors: PropTypes.object,
  size: PropTypes.object,
};

export default GitHub;