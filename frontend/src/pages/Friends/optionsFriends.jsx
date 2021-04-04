import React, {useState, Fragment} from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from '@material-ui/icons/MoreVert'
import { Modal, Fade } from "@material-ui/core";
import {useStyles, useRename} from './style'
import api from '../../services/api'

const IsolatedMenuFriend = props => {
  const url = window.location.search
  const get = new URLSearchParams(url)
  const id_group = get.get('id')

  //styles
  const classes = useStyles();
  const stlRename = useRename();

  //targets
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const [renameEl, setRenameEl] = useState(null)
  const renameOpen = Boolean(renameEl)

  //DELETE A FRIEND
  async function deleteFriend(idFriend){
      api.delete(`/friends/${idFriend}`)
      window.location.reload()
  }

  //RENAME FRIEND
  const renameEnter = () => {document.getElementById("renameName").addEventListener('keypress', (e) => {
    if(e.key === "Enter"){
      renameFriend(props.id)
    }
  })}

  async function renameFriend(idFriend){
    const name = document.getElementById("renameName").value
    const surname = document.getElementById("renameSurname").value

    api.put(`/friend/${idFriend}`, {
      name: `${name}`,
      surname: `${surname}`,
      id_group: `${id_group}`
    }).then(res => {
      window.location.reload()
    })
  }

  return (
    <>
    <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        closeAfterTransition
        className={stlRename.modal}
        anchorEl={renameEl}
        open={renameOpen}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={renameEl} className={classes.styledModal}>
          <div className={stlRename.paper}>
            <p>Rename <b>{props.name}</b> name to</p>
            <div style={{width: 230, float: 'left'}}>
              <p>Name</p>
              <input type="text" autoFocus={true} id="renameName" onKeyDown={renameEnter} />
            </div>
            <div style={{width: 230, float: 'right'}}>
              <p>Surname</p>
              <input type="text" id="renameSurname" onKeyDown={renameEnter} />
            </div>
            <button id="btnGreen" type="button" onClick={() => {renameFriend(props.id)}}>Confirm</button>
            <button id="btnRed" type="button" onClick={() => {setRenameEl(null)} }>Cancel</button>
          </div>
        </Fade>
      </Modal>
    <Fragment>
      
      <IconButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={event => setAnchorEl(event.currentTarget)}
        className={classes.Menu}
      >
        <MoreVertIcon  />
      </IconButton>

      <Menu
        elevation={0}
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        
        onClose={() => setAnchorEl(null)}
      >
        <MenuItem
          onClick={() => {
            setAnchorEl(null);
            deleteFriend(props.id) 
          }}
        >
          Delete Group
        </MenuItem>
        <MenuItem
          aria-label="more"
          aria-controls="rename"
          aria-haspopup="true"
          onClick={event => setRenameEl(event.currentTarget)}
        >
          Rename Friend
        </MenuItem>
      </Menu>
    </Fragment>
    </>
  );
};

export default IsolatedMenuFriend