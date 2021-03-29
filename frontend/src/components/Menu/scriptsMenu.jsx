import React, {useState, Fragment} from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from '@material-ui/icons/MoreVert'
import {useStyles} from './style'
import api from '../../services/api'

const IsolatedMenu = props => {
  const classes = useStyles();

  //DELETE A GROUP
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  async function deleteGroup(idGroup){
     await api.delete(`groups/${idGroup}`).then(res => {
        const result = res.data.groups
        setGroups([result])      
     }).catch((err) => { console.error('error' + err) })
     window.location.href = '/'
  }


  //RENAME GROUP
  function renameClick(idGroup){
    console.log(idGroup)
    //document.getElementById(`rename${idGroup}`).style.display = "block"
  }

  async function renameGroup(idGroup){

  }

  return (
    <Fragment>
      <IconButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={event => setAnchorEl(event.currentTarget)}
        className={classes.AlignRight}
      >
        <MoreVertIcon className={classes.Menu} />
      </IconButton>
      <Menu
        elevation={0}
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        transformOrigin={{
          vertical: "top",
          horizontal: "center"
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
        <MenuItem>
          Rename Group
        </MenuItem>
      </Menu>
    </Fragment>
  );
};

export default IsolatedMenu