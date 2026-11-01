/* ======================= IMPORTATIONS ======================= */
import React from 'react'
import '../Styles/landingPage.css'

const LandingPage = (props) => {
  /* ======================= STATE ======================= */
  const { esp, eng } = props.languages;

  /* ======================= FUNCTIONS ======================= */

  /* ======================= RENDERING ======================= */
  return (
    <main id='me' >
      <span id='las'>Lianel Artiles</span>
      <span id='dev'>
        {eng ? 'FullStack Web and Mobile Developer' : esp ? 'Desarrollador FullStack Web y Mobile' : 'Développeur Web et Mobile FullStack'}
      </span>
      <span id='lema'>
        {eng ? 'Working on my passion' : esp ? 'Haciendo lo que me apasiona' : 'En travaillant sur ma passion'}
      </span>
    </main>
  )
}

export default LandingPage
