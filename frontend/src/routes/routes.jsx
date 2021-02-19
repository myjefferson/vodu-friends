import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

//Pages
import Friend from '../pages/Friend/Friend'
import MyFriends from '../pages/MyFriends/MyFriends'

export default function Routes(){
   return (
      <BrowserRouter>
         <Switch>
            <Route path="/addGroup" component="" />
            <Route path="/friend" component={Friend} />
            <Route path="/myfriends" component={MyFriends}/>
         </Switch>
      </BrowserRouter>
   )
}