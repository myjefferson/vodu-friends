import React from 'react'

import Panel from './pages/components/Menu/Menu'

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
        <footer>
          <p>Created with ❤ by Jefferson Carvalho</p>
        </footer>
      </div>
      <GeneralStyle/>
    </>
  );
}
