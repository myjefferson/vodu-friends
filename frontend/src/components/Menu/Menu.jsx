import 'boxicons'
import React, { useEffect, useState } from 'react'
import {uuid} from 'uuidv4'
//imgs
import logo from '../../assets/img/vodu-friends-logo.png'
import api from '../../services/api'
//style
import {useStyles} from './style'
import { IconButton, MenuItem } from '@material-ui/core'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import Menu from '@material-ui/core/Menu'


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
   async function createGroup(){
      var newGroup = document.querySelector('#text-group').value
      
      redirect = uuid()

      const res = await api.post('/groups', {
         id: redirect,
         name: `${newGroup}`
      });

      const group = res.data.groups
      setGroups([...groups, group])

      window.location.href = `/inGroup?id=${redirect}`
   }

   //DELETE A GROUP
   async function deleteGroup(idGroup){
      api.delete(`groups/${idGroup}`).then(res => {
         const result = res.data.groups

         setGroups([result])
         window.location.href = "/"
         
      }).catch((err) => { console.error('error' + err) })
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

               <button type="submit" id="btnGreen" onClick={() => createGroup()}>
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
                        <IconButton
                           className={classes.Menu}
                           aria-label="more"
                           aria-controls="long-menu"
                           aria-haspopup="true"
                           onClick={handleClick}
                        >
                           <MoreVertIcon  />
                        </IconButton>

                        <Menu 
                           id="long-menu"
                           anchorEl={anchorEl}
                           keepMounted
                           open={open}
                           onClose={handleClose}
                           PaperProps={{
                              style: {
                                 maxHeight: 30 * 4,
                                 width: '8ch'  
                              }
                           }}
                        >
                           <MenuItem onClick={handleClose}>Rename</MenuItem>
                           <MenuItem onClick={ () => {deleteGroup(group.id)} }>Delete</MenuItem>                           
                        </Menu>
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