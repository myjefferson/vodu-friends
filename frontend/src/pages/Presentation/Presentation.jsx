import React from 'react'
import {stylePresentation} from './styles'

export default function Presentation(){
   const classes = stylePresentation()

   return(
      <>
         <div className={classes.alignCenter}>
            <h1 className={classes.text}>Hi, Welcome to VoDu Friends!</h1>
         </div>
      </>
   )
}