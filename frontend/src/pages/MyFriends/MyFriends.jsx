import React, {useEffect, useState} from 'react'
import api from '../../services/api'
import {Li, H1, Container, AlignRight, useStyles, StyledModal} from './style'
import Modal from '@material-ui/core/Modal'
import Backdrop from '@material-ui/core/Backdrop'
import Fade from '@material-ui/core/Fade'

function getModalStyle(){
   const top = 50
   const left = 50

   return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`
   }
}

export default function MyFriends(){
   //Modal
   const classes = useStyles();
   const [open, setOpen] = useState(false)
   const [modalStyle] = useState(getModalStyle)

   const handleOpen = () => {
      setOpen(true)
   }

   const handleClose = () => {
      setOpen(false)
   }

   //get friends
   const [friends, setFriends] = useState([])

   useEffect(() => {
      api.get('gets').then(res => {
         setFriends(res.data.friends)
      }).catch((err) => {
         console.error("Error" + err)
      })
   }, [])

   function insertPerson(){
      var name = document.querySelector('#name').value
      var surname = document.querySelector('#surname').value

      const res = api.post('/friends', {
         id: 5,
         id_group: 5,
         id_avatar: 5,
         name: `${name}`,
         surname: `${surname}`
      })

      const friend = res

      setFriends([...friends, friend])
   }

   return(
      <>
         <div>
            <H1>All my friends</H1>
            <AlignRight><button id="btnDefault" onClick={handleOpen}>Add person</button></AlignRight>
         </div>
         <Container>     
            {friends.map(friend => 
               <a href="/friend">
                  <Li>
                     <img src="" alt={friends.name}></img>
                     {friend.name} <br/>
                  </Li>
               </a>)
            }
         </Container>

         <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
               timeout: 500,
            }}
         >
            <Fade in={open}>
               <StyledModal style={modalStyle} className={classes.paper}>
                  <form action="" autocomplete='off'>
                     <h2>Register person</h2>
                     <div style={{width: 230, float: 'left'}}>
                        <p>Name</p>
                        <input type="text" id='name'/>
                     </div>
                     <div style={{width: 230, float: 'left', marginLeft: 15}}>
                        <p>Surname</p>
                        <input type="text" id='surname'/>
                     </div>
                     <button id="btnGreen" onClick={() => {insertPerson(); handleClose()}}>Confirm</button>
                     <button id="btnRed" onClick={handleClose}>Cancel</button>
                  </form>
               </StyledModal>
            </Fade>
         </Modal>
      </>
   )
}

