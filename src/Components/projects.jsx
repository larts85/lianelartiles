import React, { useState } from 'react';
import Tooltip from '@mui/material/Tooltip';
import { projects } from '../data/projects';
import GitHubLogo from '../images/components/GitHub'
import WWW from '../images/components/WWW';
import '../Styles/projects.css'
import PlayerModal from './PlayerModal';
import VideoIcon from '../images/components/Video';
import Overlay from './Overlay';
import TooltipOverlay from './Overlay';
import useWindowDimensions from '../Utils/WindowDimensionsHook';

const Projects = (props = {}) => {
  const { languages, darkMode, isMobile } = props;
  const { eng, esp } = props.languages;
  const { height, width } = useWindowDimensions();
  const toolTipTextColorContent = { color: darkMode ? '#fff' : '#333' }

  const [open, setOpen] = useState(false);
  const [tooltipOpened, setTooltipOpened] = useState({});
  const [openTooltipOverlay, setOpenTooltipOverlay] = useState(false);
  const [modalProps, setModalProps] = useState({
    url: '',
    title: ''
  })

  const tooltipSx = {
    background: !darkMode
      ? `linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%), #707070`
      : `linear-gradient(180deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0) 100%), #292A2E`,
    maxWidth: 320,
    fontSize: 16,
    padding: "15px",
    borderRadius: "10px"
  };

  const defineTextLanguage = (project) => {
    const lang = eng ? 'eng' : esp ? 'esp' : 'fre';
    return project.technologies.texts?.[lang]?.map((tech, index) => (
      <li key={index}>
        <span className='toolTip-text' style={toolTipTextColorContent}>{tech}</span>
      </li>
    ))
  }
  const renderTooltipContent = (project) => (
    <>
      <h3 className='toolTip-text' style={toolTipTextColorContent}>{project.name}</h3>
      <p className='toolTip-text' style={toolTipTextColorContent}>
        {languages.eng ? project.engText : languages.esp ? project.spaText : project.freText}
      </p>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          filter: 'drop-shadow(2px 2px 2px rgb(27, 27, 27))'
        }}
      >
        {project.technologies.icons.map((tech, index) => (
          <img
            src={tech}
            alt='ups'
            width='50'
            height='50'
            style={{ padding: 5 }}
            key={index}
          />
        ))}
      </div>
      <ul>
        {project.technologies.texts && Object.keys(project.technologies.texts).length > 0 && (
          <li>
            <span className='toolTip-text' style={toolTipTextColorContent}>
              {languages.eng ? 'And:' : languages.esp ? 'Ademas:' : 'En plus:'}
            </span>
          </li>
        )}
        {defineTextLanguage(project)}
      </ul>
    </>
  )

  return (
    <>
      <div id='projects-container'>
        <h1>{languages.eng ? 'Projects' : languages.esp ? 'Proyectos' : 'Des Projects'}</h1>
        <div className="cards-container">
          {
            projects.map((project, index) => {
              return (
                <div className="project-card" key={index}>
                  {isMobile ? (<Tooltip
                    open={tooltipOpened[index]}
                    title={renderTooltipContent(project)}
                    slotProps={{ tooltip: { sx: tooltipSx } }}
                  >
                    <p id="about" onClick={() => {
                      setOpenTooltipOverlay(true)
                      setTooltipOpened({
                        [index]: !tooltipOpened[index]
                      })
                    }}>?</p>
                  </Tooltip>) :
                    (<Tooltip
                      title={renderTooltipContent(project)}
                      slotProps={{ tooltip: { sx: tooltipSx } }}
                    >
                      <p id="about">?</p>
                    </Tooltip>)}
                  <img src={project.logo} alt="ups" id='logo' />
                  <div className="card-links">
                    {project.repo && (
                      <Tooltip title="Repository">
                        <a
                          id="gitLink"
                          target="_blank"
                          rel="noopener noreferrer"
                          href={project.repo}
                        >
                          <GitHubLogo
                            size={{ width: "30", height: "30" }}
                            darkMode={darkMode}
                            colors={{ light: 'white', dark: '#201E1E' }}
                          />
                        </a>
                      </Tooltip>
                    )}
                    {project.webSite && (
                      <Tooltip title="Web Site">
                        <a
                          id="webLink"
                          target="_blank"
                          rel="noopener noreferrer"
                          href={project.webSite}
                        >
                          <WWW
                            size={{ width: "30", height: "30" }}
                            darkMode={darkMode}
                            colors={{ light: 'white', dark: '#201E1E' }}
                          />
                        </a>
                      </Tooltip>
                    )}
                    {project.video && (
                      <>
                        <Tooltip
                          title="Play Presentation Video"
                          onClick={() => {
                            setModalProps({
                              url: project.video,
                              title: project.name
                            });
                            setOpen(!open)
                          }}
                          arrow
                          placement='bottom-end'
                        >
                          <button className='video'>
                            <VideoIcon
                              darkMode={darkMode}
                              colors={{ light: 'white', dark: '#201E1E' }}
                              size={{ width: "36", height: "36" }}
                            />
                          </button>
                        </Tooltip>
                      </>
                    )}
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
      <PlayerModal
        videoTitle={modalProps.title}
        open={open}
        setOpen={setOpen}
        darkMode={darkMode}
        playerProps={{
          playing: open,
          light: true,
          url: modalProps.url,
          controls: true,
          width: "720px",
          height: "405px",
          style: {
            maxWidth: isMobile && height > width ? '100vw' : '80vw',
            maxHeight: '80vh'
          }
        }}
      />
      <TooltipOverlay
        open={openTooltipOverlay}
        stateChangers={[
          setOpenTooltipOverlay,
          setTooltipOpened
        ]}
        styles={{
          backgroundColor: 'rgba(0, 0, 0, 0)'
        }}
      />
      <Overlay
        open={open}
        stateChangers={[setOpen]}
      />
    </>
  )
}

export default Projects
