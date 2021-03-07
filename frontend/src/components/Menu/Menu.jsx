import 'boxicons'
import React, { useEffect, useState } from 'react'
import {uuid} from 'uuidv4'
//imgs
import logo from '../../assets/img/vodu-friends-logo.png'
import api from '../../services/api'
//style
import {useStyles} from './style'


export default function Home(){
   
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


   //create a new group
   async function createGroup(){
      var newGroup = document.querySelector('#text-group').value

      const res = await api.post('/groups', {
         id: uuid(),
         name: `${newGroup}`
      });

      const group = res.data

      setGroups([...groups, group])
   }


   return(
      <>
         <div className={classes.div} id='scrollMenu'>
            <img className={classes.img} src={logo} alt="VoDu Friends"/>

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
                  Confirm
               </button>
            </form>

            <hr/>
            
            <div>
               {groups.map(group => <a href={`/inGroup?id=${group.id}`} className={classes.A}><li className={classes.Groups} key={group.id}>{group.name}</li></a>)}            
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