import React, { useState } from 'react';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import Pdf from './pdfViewver';
import JsResume from './JsResume';

const Resume = ({ language }) => {
  const { esp, eng, fre } = language;

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
        selected === 'TradResume' ? <Pdf language={language} /> : <JsResume language={language} />
      }
    </div>
  )
}


export default Resume
