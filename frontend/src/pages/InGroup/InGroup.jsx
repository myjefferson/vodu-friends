import React, {useEffect, useState} from 'react'
import api from '../../services/api'
import {uuid} from 'uuidv4'

import {useStyles, useModal} from './style'
import Modal from '@material-ui/core/Modal'
import Backdrop from '@material-ui/core/Backdrop'
import Fade from '@material-ui/core/Fade'

export default function MyFriends(){
   //Modal
   const classes = useStyles();
   const modal = useModal();
   const [open, setOpen] = useState(false)

   const handleOpen = () => {
      setOpen(true)
   }

   const handleClose = (e) => {
      e.preventDefault()
      setOpen(false)
   }

   //get friends
   const [friends, setFriends] = useState([])
   const [group, setGroup] = useState([])

   useEffect(() => {
      const url = window.location.search
      const query = new URLSearchParams(url)
      const tags = query.get('id')

      api.get(`inGroup?id=${tags}`).then(res => {
         setFriends(res.data.friends)
         setGroup(res.data.group)

      }).catch((err) => {
         console.error("Error" + err)
      })
   }, [])

   async function createPerson(){
      var name = document.querySelector('#name').value
      var surname = document.querySelector('#surname').value
   
      const url = window.location.search
      const query = new URLSearchParams(url)
      const tags = query.get('id') 

      const idUser = uuid()

      const res = await api.post('/friends', {
         id: idUser,
         id_group: tags,
         name: `${name}`,
         surname: `${surname}`
      })

      //create avatar
      await api.post('/avatars', {
         user_avatar: idUser,
         skin: "",
         hair: "",
         shirt: "",
         pant: "",
         shoes: ""
      })

      const friend = res

      setFriends([...friends, friend])
   }

   return(
      <>
         <div className={classes.header}>
            <h1 className={classes.h1}>{group.map(group => group.name)}</h1>
            <button id="btnDefault" className={classes.alignRight} onClick={handleOpen}>Add person</button>
         </div>
         <div className={classes.container}>     
            {friends.map(friend => 
               <a href={`friend?user_avatar=${friend.id}`} key={friend.id}>
                  <li className={classes.li}>
                     <img src="" alt={friends.name}></img>
                     {friend.name} <br/>
                  </li>
               </a>)
            }
         </div>

         <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={modal.modal}
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
               timeout: 500,
            }}
         >
            <Fade in={open}>
               <div className={classes.styledModal}>
                  <div  className={modal.paper}>
                     <form action="" autoComplete='off'>
                        <h2>Register person</h2>
                        <div style={{width: 230, float: 'left'}}>
                           <p>Name</p>
                           <input type="text" id='name'/>
                        </div>
                        <div style={{width: 230, float: 'left', marginLeft: 15}}>
                           <p>Surname</p>
                           <input type="text" id='surname'/>
                        </div>
                        <button id="btnGreen" onClick={() => {createPerson(); handleClose()}}>Confirm</button>
                        <button id="btnRed" onClick={handleClose}>Cancel</button>
                     </form>
                  </div>
               </div>
            </Fade>
         </Modal>
      </>
   )
}