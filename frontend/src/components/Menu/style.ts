import {makeStyles} from '@material-ui/core/styles';

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

   AlignRight : {
      float: 'right',
   },

   Groups: {
      cursor: 'pointer',
      display: 'block',
      color: 'white',
      background: '#2E303D',
      padding: '15px',
      borderRadius: '3px',
      margin: '0 0 10px 0',
   },

   A: {
      textDecoration: 'none',
   }
})