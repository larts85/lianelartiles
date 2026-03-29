import React from 'react';
import PropTypes from 'prop-types';
import {
  fallbackCopyTextToClipboard,
} from "../Utils/DOM-Manipulation";
import { REACT_APP_FACEBOOK_API_ID } from "../keys";
import { personalLinks, webs } from "../constants/links";
import "../Styles/footer.css";
import Copy from '../images/components/copy';
import Messenger from '../images/components/Messenger';
import WhatsApp from '../images/components/wapp';
import Facebook from '../images/components/facebook';

const ShareOptions = (props = {}) => {
  const { languages, setMessage, open, setOpen, isMobile, darkMode } = props;

  const copiedSuccessfullyMessage = languages.esp
    ? "Copiado exitosamente al portapaleles"
    : languages.eng
      ? "Clipboard successfully set"
      : "Copie réussie dans le presse-papiers";
  const copyFailedMessage = languages.esp
    ? "No pudo copiarse al portapaleles"
    : languages.eng
      ? "Clipboard write failed"
      : "Impossible de copier dans le presse-papiers";
  const message = languages.eng
    ? "_I want to share with you this website that I found interesting:_"
    : languages.esp
      ? "_Te comparto este sitio web que me pareció interesante:_"
      : "_Je vous partage ce site web que j'ai trouvé intéressant:_";
  const currentUrl = typeof window === "undefined" ? webs.PORTFOLIO : window.location.href;

  const shareOptions = [
    {
      logo: WhatsApp,
      link: `${personalLinks.WHATSAPP}${message} ${currentUrl}`,
      action: (link) => window.open(link),
    },
    isMobile
      ? {
        logo: Messenger,
        link: currentUrl,
        action: (link) =>
          window.open(
            window.open(personalLinks.MESSENGER + encodeURIComponent(link) + '&app_id=' + encodeURIComponent(REACT_APP_FACEBOOK_API_ID))
          ),
      }
      : {},
    !isMobile
      ? {
        logo: Facebook,
        link: currentUrl,
        action: (link) =>
          window.open(
            window.open(personalLinks.FACEBOOK + 'app_id=' + REACT_APP_FACEBOOK_API_ID + '&link=' + link + '&redirect_uri=' + link)
          ),
      }
      : {},
    {
      logo: Copy,
      action: async () => {
        if (!navigator.clipboard) {
          fallbackCopyTextToClipboard(
            currentUrl,
            setMessage,
            copiedSuccessfullyMessage,
            copyFailedMessage
          );
          return;
        }
        navigator.clipboard.writeText(currentUrl).then(
          () =>
            setMessage({
              success: true,
              copiedSuccessfully: copiedSuccessfullyMessage,
            }),
          () => setMessage({ success: false, copyFailed: copyFailedMessage })
        );
      },
    },
  ];

  const styles = {
    root: open ? {
      display: "initial",
      background: darkMode ? `linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%), #707070` : `linear-gradient(180deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0) 100%), #292A2E`,
      position: "fixed",
      padding: 10,
      borderRadius: 10,
      top: "50%",
      left: "50%",
      transition: "300ms ease-in-out",
      transform: "translate(-50%, -50%) scale(1)",
      boxShadow: "none",
      zIndex: 100,
    } : {
      display: "none",
      transform: "translate(-50%, -50%) scale(0)",
    },
    span: {
      color: !darkMode ? '#fff' : '#000',
    }
  }

  const renderOption = ({ logo, link, action }, index) => {
    const ImageComponent = logo;
    if (typeof ImageComponent == 'string') {
      return (
        <img
          key={index}
          src={logo}
          className="share-option"
          alt="Ups"
          onClick={() => action(link)}
        />
      )
    }
    if (ImageComponent) {
      return (
        <ImageComponent
          key={index}
          className="share-option"
          darkMode={darkMode}
          isMobile={isMobile}
          setOpen={setOpen}
          action={action}
          link={link}
          size={{
            width: "30",
            height: "30",
          }}
          colors={{
            dark: "#ffffff",
            light: "#201e1e",
          }}
        />
      )
    }
  }

  return (
    <div
      style={isMobile ? styles.root : null}
      id={isMobile ? '' : "share"}
      className={isMobile ? '' : open ? "mobileMsg" : "msg"}
    >
      <span style={isMobile ? styles.span : null}>
        {languages.eng
          ? "Share this website"
          : languages.esp
            ? "Compartir este sitio web"
            : "Partagez ce site"}
      </span>
      <div id="share-options">
        {shareOptions.map((option, index) => renderOption(option, index))}
      </div>
    </div>
  )
}

ShareOptions.propTypes = {
  open: PropTypes.bool,
  setOpen: PropTypes.func,
  setMessage: PropTypes.func
};

export default ShareOptions;
