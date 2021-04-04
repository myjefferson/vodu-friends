import React, {useState, Fragment} from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from '@material-ui/icons/MoreVert'
import { Modal, Fade } from "@material-ui/core";
import {useStyles, useRename} from './style'
import api from '../../../services/api'

const IsolatedMenu = props => {
  //styles
  const classes = useStyles();
  const stlRename = useRename();

  //targets
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const [renameEl, setRenameEl] = useState(null)
  const renameOpen = Boolean(renameEl)

  //DELETE A GROUP
  async function deleteGroup(idGroup){
     await api.delete(`groups/${idGroup}`).then()
     .catch((err) => { console.error('error' + err) })
     window.location.href = '/'
  }

  //RENAME GROUP
  const renameEnter = () => {document.getElementById("renameGroup").addEventListener('keypress', (e) => {
    if(e.key === "Enter"){
      renameGroup(props.id)
    }
  })}

  async function renameGroup(idGroup){
    const rename = document.getElementById("renameGroup").value

    api.put(`/groups/${idGroup}`, {
      name: `${rename}`
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
            <p>Rename <b>{props.name}</b> group to</p>
            <input type="text" autoFocus={true} id="renameGroup" onKeyDown={renameEnter} />
            <button id="btnGreen" type="button" onClick={() => {renameGroup(props.id)}}>Confirm</button>
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
        <MoreVertIcon />
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
            deleteGroup(props.id) 
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
          Rename Group
        </MenuItem>
      </Menu>
    </Fragment>
    </>
  );
};

export default IsolatedMenu