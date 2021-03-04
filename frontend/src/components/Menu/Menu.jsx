import 'boxicons'
import React, { useEffect, useState } from 'react'
//imgs
import logo from '../../assets/img/vodu-friends-logo.png'
import api from '../../services/api'
//style
import {
   A, AlignRight,
   Groups, Logo, Panel
} from './style'

export default function Home(){

   const [groups, setGroups] = useState([])

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
         id: 4,
         name: `${newGroup}`
      });

      const group = res.data

      setGroups([...groups, group])
   }


   return(
      <>
         <Panel id='scrollMenu'>
            <Logo src={logo} alt="VoDu Friends"/>

            <button type="submit" className="" id="btnGreen" name="btnAddGroup" onClick={() => showAddGroup()}>
               Add people group
            </button>

            <form action="" id="formGroup" className="hidden" autoComplete='off'>
               <label id="tip">Group's name</label>
               <AlignRight>
                  <box-icon name='x' size='25px' color='#FFDD2B' onClick={() => hiddenAddGroup()}></box-icon>
               </AlignRight>
               
               <input type="text" id="text-group"/>

               <button type="submit" id="btnGreen" onClick={() => createGroup()}>
                  Confirm
               </button>
            </form>

            <A href="/myFriends"><button id="btnBlue">
               My Friends
            </button></A>
            <hr/>
            
            <div>
               {groups.map(group => <Groups key={group.id}>{group.name}</Groups>)}            
            </div>
         </Panel>

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