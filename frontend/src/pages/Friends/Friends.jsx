import { IconButton, MenuItem } from '@material-ui/core'
import Backdrop from '@material-ui/core/Backdrop'
import Fade from '@material-ui/core/Fade'
import Menu from '@material-ui/core/Menu'
import Modal from '@material-ui/core/Modal'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import React, { useEffect, useState } from 'react'
import IsolatedMenuFriend from './optionsFriends'
import { uuid } from 'uuidv4'
import api from '../../services/api'
import { useModal, useStyles } from './style'


export default function MyFriends(){
   //Query Url
   const url = window.location.search
   const query = new URLSearchParams(url)
   const tags = query.get('id')

   //Modal
   const classes = useStyles();
   const modal = useModal();

   const [open, setOpen] = useState(false)

   const handleOpen = () => {
      setOpen(true)
   }

   const handleClose = () => {
      setOpen(false)
   }

   //get friends
   const [friends, setFriends] = useState([])
   const [group, setGroup] = useState([])

   useEffect(() => {
      api.get(`friends?id=${tags}`).then(res => {
         setFriends(res.data.friends)
         setGroup(res.data.group)

      }).catch((err) => {
         console.error("Error" + err)
      })
   }, [])

   async function createPerson(){
      var name = document.querySelector('#name').value
      var surname = document.querySelector('#surname').value

      const idUser = uuid()

      const res = await api.post('/friends', {
         id: `${idUser}`,
         id_group: `${tags}`,
         name: `${name}`,
         surname: `${surname}`
      })

      //create avatar
      await api.post('/avatars', {
         user_avatar: `${idUser}`,
         skin: "0xB26644",
         hair: "0x46251F",
         shirt: "0xF2F2F2",
         pant: "0x3A3A3A",
         shoes: "0xF0F0F0"
      })

      const friend = res

      setFriends([...friends, friend])

      window.location.href = `/friends?id=${tags}`
   }

   //Menu Friend
   const [anchorEl, setAnchorEl] = useState(null)
   const options = Boolean(anchorEl)

   const handleClickFriend = (event) => {
      setAnchorEl(event.currentTarget)
   }

   const handleCloseFriend = () => {
      setAnchorEl(null)
   }

   return(
      <>
         <div className={classes.header}>
            <h1 className={classes.h1}>{group.map(group => group.name)}</h1>
            <button id="btnDefault" className={classes.alignRight} onClick={handleOpen}>Add person</button>
         </div>
         <div className={classes.container}>     
            {friends.map(friend => 
               <div className={classes.friend} key={friend.id}>
                  <a href={`avatar?user_avatar=${friend.id}`} className={classes.A}>
                     <li className={classes.li}>
                        <img src="" alt={friends.name}></img>
                        {friend.name} <br/>
                     </li>
                  </a>

                  <IsolatedMenuFriend id={friend.id} name={friend.name}/>
               </div> )
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
            <Fade in={open} className={classes.styledModal}>
               <div  className={modal.paper}>
                  <form autoComplete='off'>
                     <h2>Register person</h2>
                     <div style={{width: 230, float: 'left'}}>
                        <p>Name</p>
                        <input type="text" id='name'/>
                     </div>
                     <div style={{width: 230, float: 'left', marginLeft: 15}}>
                        <p>Surname</p>
                        <input type="text" id='surname'/>
                     </div>
                     <button id="btnGreen" type="button" onClick={() => {createPerson(); handleClose()}}>Confirm</button>
                     <button id="btnRed" type="button" onClick={handleClose}>Cancel</button>
                  </form>
               </div>
            </Fade>
         </Modal>
      </>
   )
}