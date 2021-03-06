import React from 'react'

import Panel from './components/Menu/Menu'

import Routes from './routes/routes'
import GeneralStyle from './assets/style/general-style'

export default function App() {
  return (
    <> 
      <div id="wrapper">
        <div id='menuScale'>
          <Panel />
        </div>
        <div id="containerScale">
          <Routes />
        </div>
      </div>
      <GeneralStyle/>
    </>
  );
}
