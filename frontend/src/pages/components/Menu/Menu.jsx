import 'boxicons'
import React, { useEffect, useState, Fragment } from 'react'
import {uuid} from 'uuidv4'
//imgs
import logo from '../../../assets/img/vodu-friends-logo.png'
import api from '../../../services/api'
//style
import {useStyles} from './style'
import IsolatedMenu from './optionsMenu.jsx'

export default function Panel(){
   
   const [groups, setGroups] = useState([])
   const classes = useStyles();

   //load groups
   useEffect(() => {
      api.get('/gets').then(res => {
         setGroups(res.data.groups)
      }).catch((err) => { 
         console.error('erro'+err) 
      })
   }, [])

   //CREATE A NEW GROUP
   var redirect
   function createGroup(){
      var newGroup = document.querySelector('#text-group').value
      
      redirect = uuid()

      api.post('/groups', {
         id: redirect,
         name: `${newGroup}`,
      }).then(res => {
         const group = res.data.groups
         setGroups([...groups, group])

         window.location.href = `/friends?id=${redirect}`
      });
   }   

   return(
      <>
         <div className={classes.div} id='scrollMenu'>
            <a href="/"><img className={classes.img} src={logo} alt="VoDu Friends"/></a>

            <button type="submit" className="" id="btnGreen" name="btnAddGroup" onClick={() => {showAddGroup()}}>
               Add people group
            </button>

            <div action="" id="formGroup" className="hidden" on>
               <label id="tip">Group's name</label>
               <div className={classes.AlignRight}>
                  <box-icon name='x' size='25px' color='#FFDD2B' onClick={() => {hiddenAddGroup()}}></box-icon>
               </div>
               
               <input type="text" id="text-group"/>

               <button type="button" id="btnGreen" onClick={() => {createGroup()}}>
                  Create group
               </button>
            </div>

            <hr/>
            
            <div>
               {groups.map(group => 
                  <>
                     <div className={classes.Groups} key={group.id}>
                        <a
                           className={classes.Anchor} 
                           href={`/friends?id=${group.id}`} 
                        >
                           <li
                              className={classes.Li}>{group.name}
                           </li>
                        </a>
                        <IsolatedMenu id={group.id} name={group.name} />
                     </div>
                  </>
                  )
               }            
            </div>
         </div>

      </>
   )
}


function showAddGroup(){
   document.querySelector("#formGroup").setAttribute("class", "show")
   document.querySelector("#text-group").focus()
   document.querySelector('button[name="btnAddGroup"]').setAttribute("class", "hidden")
}

function hiddenAddGroup(){
   document.querySelector("#formGroup").setAttribute("class", "hidden")
   document.querySelector("#text-group").value=""
   document.querySelector('button[name="btnAddGroup"]').setAttribute("class", "show")
}