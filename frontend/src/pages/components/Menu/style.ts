import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';

export const useStyles = makeStyles({
   div : {
      position: 'relative',
      zIndex: 1,
      width: '100%',
      height: '100vh',
      margin: '0',
      padding: '30px 15px 30px 30px',
      overflowX: 'hidden'
   },

   img: {
      display: 'block',
      padding: '10px',
      width: '100%',
      margin: '0 0 30px 0',
   },

   Groups: {
      position: 'relative',
      cursor: 'pointer',
      display: 'block',
      color: '#fff',
      background: '#2E303D',
      padding: '15px',
      borderRadius: '3px',
      margin: '0 0 10px 0',
   },

   Anchor: {
      color: '#fff',
      textDecoration: 'none',
      listStyle: 'none'
   },

   Menu: {
      color: '#fff !important',
      float: 'right',
      margin: '-34px -16px 0 0 !important'
   },

   AlignRight: {
      float: 'right',
      cursor: 'pointer'
   },

   typeText: {
      top: '-13px',
      left: '0',
      position: 'absolute'
   },

   option : {
      background: "#D1F4FF"
   },

   styledModal: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      borderRadius: '5px',
      border: '1px solid #FFFFFF',
      color: 'white',
      padding: '10px',
      width: '350px',
      background: '#393C4F',
   }
})

export const useRename = makeStyles((theme: Theme) => {
   createStyles({
      modal: {
         display: 'flex',
         alignItems: 'center',
         justifyContent: 'center'
      },
      paper: {
         position: 'absolute',
         boxShadow: theme.shadows[5],
         backgroundColor: theme.palette.background.paper,
      }
   })
})