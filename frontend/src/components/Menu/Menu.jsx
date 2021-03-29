import 'boxicons'
import React, { useEffect, useState, Fragment } from 'react'
import {uuid} from 'uuidv4'
//imgs
import logo from '../../assets/img/vodu-friends-logo.png'
import api from '../../services/api'
//style
import {useStyles} from './style'
import { IconButton, MenuItem, Fade, Paper } from '@material-ui/core'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import Pooper from '@material-ui/core/Popper'
import Menu from '@material-ui/core/Menu'
import IsolatedMenu from './scriptsMenu.jsx'

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
         name: `${newGroup}`
      }).then(res => {
         const group = res.data.groups
         setGroups([...groups, group])

         window.location.href = `/inGroup?id=${redirect}`
         //console.log(res.data)
      });

      
   }   

   //MENU
   const [anchorEl, setAnchorEl] = useState(null);
   const open = Boolean(anchorEl);
 
   const handleClick = (event) => {
     setAnchorEl(event.currentTarget)
   };
 
   const handleClose = () => {
     setAnchorEl(null);
   };

   return(
      <>
         <div className={classes.div} id='scrollMenu'>
            <a href="/"><img className={classes.img} src={logo} alt="VoDu Friends"/></a>

            <button type="submit" className="" id="btnGreen" name="btnAddGroup" onClick={() => showAddGroup()}>
               Add people group
            </button>

            <form action="" id="formGroup" className="hidden" autoComplete='off'>
               <label id="tip">Group's name</label>
               <div className={classes.AlignRight}>
                  <box-icon name='x' size='25px' color='#FFDD2B' onClick={() => hiddenAddGroup()}></box-icon>
               </div>
               
               <input type="text" id="text-group"/>

               <button type="button" id="btnGreen" onClick={() => createGroup()}>
                  Create group
               </button>
            </form>

            <hr/>
            
            <div>
               {groups.map(group => 
                  <>
                     <div className={classes.Groups} key={group.id}>
                        
                        <a 
                           className={classes.A} 
                           href={`/inGroup?id=${group.id}`} 
                        >
                           <li 
                              className={classes.Li}>{group.name}
                           </li>
                        </a>
                        <IsolatedMenu id={group.id} />
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