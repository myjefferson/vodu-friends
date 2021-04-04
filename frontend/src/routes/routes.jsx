import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

//Pages
import Friends from '../pages/Friends/Friends'
import Avatar from '../pages/Avatar/Avatar'
import Presentation from '../pages/Presentation/Presentation'

export default function Routes(){
   return (
      <BrowserRouter>
         <Switch>
            <Route exact path="/" component={Presentation} />
            <Route path="/addGroup" component="" />
            <Route path="/avatar" component={Avatar} />
            <Route path="/friends" component={Friends}/>
         </Switch>
      </BrowserRouter>
   )
}