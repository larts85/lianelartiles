/* ======================= IMPORTATIONS ======================= */
import React, { useEffect, useState } from 'react';
import '../Styles/footer.css';
import { images, } from '../constants/images';
import { Link } from 'react-router';
import SocialMedia from './SocialMedia';
import Tooltip from '@mui/material/Tooltip';
import { useLocation } from "react-router";

const Footer = (props) => {
  /* ======================= STATE ======================= */
  const { darkMode, setDarkMode, languages, setLanguages, isMobile } = props;
  const location = useLocation();

  const [message, setMessage] = useState({});
  const [tooltip, setTooltip] = useState('');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let tooltip = '';
    if (darkMode) {
      tooltip = languages.eng ? 'Dark Mode' : languages.esp ? 'Modo Oscuro' : 'Mode Sombre'
    } else {
      tooltip = languages.eng ? 'Light Mode' : languages.esp ? 'Modo Claro' : 'Mode Clair'
    }
    setTooltip(tooltip)
  }, [darkMode, languages])

  useEffect(() => {
    setTimeout(() => {
      setMessage({});
    }, 2000);
  }, [message.success])

  /* ======================= RENDERING ======================= */
  return (
    <footer>
      <section className='sm'>
        <SocialMedia
          darkMode={darkMode}
          languages={languages}
          setMessage={setMessage}
          isMobile={isMobile}
          open={open}
          setOpen={setOpen}
        />
      </section>
      <p id='message-container'><span id={message.success ? 'success' : message.failure ? 'failure' : null}>{message.success ? message.copiedSuccessfully : message.copyFailed}</span></p>
      <p id='copyright'>
        Copyright &copy; {new Date().getFullYear()}, Lianel Artiles
      </p>
      <nav className='main-footer' onClick={() => setOpen(false)}>
        <div className='flags' onClick={() => setOpen(false)}>
          {Object.keys(languages).map((key, index) => !languages[key] && (
            <button key={index} id={key} aria-label={key === "eng" ? "English" : key === "esp" ? "Español" : "Français"} onClick={() => setLanguages({
              esp: false,
              eng: false,
              fre: false,
              [key]: true
            })}>
              {key}
            </button>
          ))}
        </div>
        <div className='footer'>
          <Link className='link' to='/about'>
            <span className={location.pathname.includes('about') ? 'fLinkSelected' : 'flink'}>{languages.eng ? 'About me' : languages.esp ? 'Sobre mi' : 'Sur moi'}</span>
          </Link>
          <Link className='link' to='/contact'>
            <span className={location.pathname.includes('contact') ? 'fLinkSelected' : 'flink'}>{languages.eng ? 'Contact me' : languages.esp ? 'Contactame' : 'Contactez moi'}</span>
          </Link>
        </div>
        <div className='toggle'>
          <Tooltip title={tooltip}>
            <img
              id='toggle'
              src={darkMode ? images.darkToggle : images.lightToggle}
              alt="toggleMode"
              onClick={() => setDarkMode((prevMode) => !prevMode)}
            /></Tooltip>
        </div>
      </nav>
    </footer>
  )
}

export default Footer;
