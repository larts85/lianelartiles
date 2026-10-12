import React, { useState } from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Pdf from './pdfViewver';
import JsResume from './JsResume';

const Resume = ({ languages }) => {
  const { esp, eng, fre } = languages;

  const [selected, setSelected] = useState('TradResume')

  const handleOnChange = (e, selected) => {
    if (selected !== null) {
      setSelected(selected);
    }
  }
  return (
    <div>
      <ToggleButtonGroup
        value={selected}
        onChange={handleOnChange}
        exclusive
      >
        <ToggleButton
          className='toggleButtons'
          value='TradResume'
          id='asd'
          style={{ fontWeight: 'lighter', fontSize: 18 }}
        >
          {esp ? 'CV Tradicional' : fre ? 'CV Traditionnel' : 'Traditional Resume'}
        </ToggleButton>
        <ToggleButton
          className='toggleButtons'
          value="JsResume"
          style={{ fontWeight: 'lighter', fontSize: 18 }}
        >
          {eng ? 'JavaScript Resume' : esp ? 'CV JavaScript' : 'CV JavaScript'}
        </ToggleButton>
      </ToggleButtonGroup>
      {
        selected === 'TradResume' ? <Pdf languages={languages} /> : <JsResume languages={languages} />
      }
    </div>
  )
}


export default Resume
