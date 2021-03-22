import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

//Pages
import Friend from '../pages/Friend/Friend'
import InGroup from '../pages/InGroup/InGroup'
import Presentation from '../pages/Presentation/Presentation'

export default function Routes(){
   return (
      <BrowserRouter>
         <Switch>
            <Route exact path="/" component={Presentation} />
            <Route path="/addGroup" component="" />
            <Route path="/friend" component={Friend} />
            <Route path="/inGroup" component={InGroup}/>
         </Switch>
      </BrowserRouter>
   )
}