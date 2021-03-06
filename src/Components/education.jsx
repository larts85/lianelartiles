import React, { useState } from 'react';
import { images } from "../constants/images"
import '../Styles/education.css'
import '../Styles/slideButtons.css'
import { schools } from "../data/schools";
import SliderButton from "../images/components/sliderButton";

const Education = (props) => {
  const { languages, darkMode } = props;
  const [current, setCurrent] = useState(0);
  const length = schools.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  const handleOnSlide = (index) => {
    setCurrent(index);
  }

  return (
    <div id='education-container'>
      <h1>{languages.eng ? 'Education' : languages.esp ? 'Educación' : 'Éducation'}</h1>
      <div id='school-container'>
        <img onClick={() => prevSlide()} className='arrows left-arrow' src={darkMode ? images.goLeftLight : images.GoLeft} alt='ups' />
        {
          schools.map((school, index) => {
            return (
              <div key={index} className={index === current ? 'school' : 'inactive'}>
                {index === current && (
                  <>
                    <a href={school.webSite} target='_blank' rel="noopener noreferrer">
                      <img src={school.logo} alt={school.name} />
                    </a>
                    <h1 className={school && school.webSite && school.webSite.includes('uccfd') ? 'school-name fajardo' : 'school-name'}>
                      {
                        languages.eng ? school.name || school.engName :
                          languages.esp ? school.name || school.espName :
                            school.name || school.freName
                      }
                    </h1>
                    <p>{languages.eng ? school.engText : languages.esp ? school.spaText : school.freText}</p>
                  </>
                )}
              </div>
            )
          })
        }
        <img onClick={() => nextSlide()} className='arrows right-arrow' src={darkMode ? images.goRightLight : images.GoRight} alt='ups' />
      </div>
      <div id='hexangon-container'>
        {schools.map((school, index) => {
          return (
            <SliderButton
              current={current}
              darkMode={darkMode}
              index={index}
              key={index}
              handleOnSlide={handleOnSlide}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Education;
