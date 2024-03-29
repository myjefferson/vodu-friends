import {makeStyles, Theme, createStyles} from '@material-ui/core/styles'

export const useStyles = makeStyles({
   friend : {
      cursor : 'pointer',
      position: 'relative',
      zIndex: 1,
      display: 'block',
      float: 'left',
      padding: '12px',
      margin: '13px',
      width: '160px',
      background: '#252732',
      borderRadius: '4px',
      border: '1px solid #454961',
   },

   li: {
      listStyle: 'none',
      color: 'white',
   },

   options: {
      float: 'right',
      margin: '-33px -10px -20px 0',
      color: '#fff'
   },

   h1: {
      float: 'left',
      color: 'white',
      margin: '13px',
   },

   container: {
      position: 'absolute',
      top: '130px',
      overflowY: 'auto',
      overflowX: 'hidden',
      height: '83%',
      padding: '0 5px 0 0',
   },

   alignRight: {
      position: 'absolute',
      top: '10px',
      right: '70px',
      float: 'right',
      width: '120px !important',
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
      width: '500px',
      background: '#393C4F',
   },

   header: {
      position: 'relative',
      zIndex: 1,
   },

   Menu: {
      color: '#fff !important',
      float: 'right',
      margin: '-33px -16px -13px 0 !important'
   },

   A: {
      textDecoration: 'none'
   }
   
})

export const useModal = makeStyles((theme: Theme) =>{
   createStyles({
      modal: {
         display: 'flex',
         alignItems: 'center',
         justifyContent: 'center',
      },
      paper:{
         position: 'absolute',
         width: 400,
         boxShadow: theme.shadows[5],
         backgroundColor: theme.palette.background.paper,
         border: '2px solid #000',
      }
   })
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
