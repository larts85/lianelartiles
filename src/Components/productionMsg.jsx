import React from 'react'
import "../Styles/msg.css";

const Message = (props) => {
  const language = props.language || true;
  console.log(language);

  return (
    <div>
      {
        language.eng ?
          (<>
            <p style={{ padding: '15px', fontSize: 22 }}>
              This website is under construction.<br />
          For the moment you can go to the following pages:
        </p>
            <span className='check'>✔</span><span>Home<br /></span>
            <span className='check'>✔</span><span>JavasCript Resume<br /></span>
            <p style={{ padding: '15px', fontSize: 22 }}>And try the following features:</p>
            <span className='check'>✔</span><span>Dark Mode<br /></span>
            <span className='check'>✔</span><span>Language<br /></span>
          </>) : language.esp ?
            (<>
              <p style={{ padding: '15px', fontSize: 22 }}>
                Este sitio web está en construcción. <br />
              Por el momento puedes ir a las siguientes páginas:
            </p>
              <span className='check'>✔</span><span>Inicio<br /></span>
              <span className='check'>✔</span><span>CV en JavasCript<br /></span>
              <p style={{ padding: '15px', fontSize: 22 }}>Y probar las siguientes funcionalidades:</p>
              <span className='check'>✔</span><span>Modo oscuro<br /></span>
              <span className='check'>✔</span><span>Idioma<br /></span>
            </>) :
            (<>
              <p style={{ padding: '15px', fontSize: 22 }}>
                Ce site est en construction. <br />
                Pour le moment vous pouvez aller aux pages suivantes:
              </p>
              <span className='check'>✔</span><span>Page d'accueil<br /></span>
              <span className='check'>✔</span><span>CV JavasCript<br /></span>
              <p style={{ padding: '15px', fontSize: 22 }}>Et essayez les fonctionnalités suivantes:</p>
              <span className='check'>✔</span><span>Mode sombre<br /></span>
              <span className='check'>✔</span><span>Langue<br /></span>
            </>)
      }
    </div>
  )
}

export default Message
