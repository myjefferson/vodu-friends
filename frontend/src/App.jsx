import React from 'react'

import Menu from './components/Menu/Menu'

import Routes from './routes/routes'
import GeneralStyle from './assets/style/general-style'

export default function App() {
  return (
    <> 
      <div id='menuScale'>
      <Menu />
      </div>
      <div id="containerScale">
        <Routes />
      </div>
      <GeneralStyle/>
    </>
  );
}
