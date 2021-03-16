import { Backdrop } from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'

export const useStyles = makeStyles({
   defaultContainer: {
      width: '100%',
   },

   p: {
      textAlign: 'center',
      color: 'white',
      fontWeight: 'bold',
      margin: '0 0 10px 0',
   },

   h1: {
      marginTop: '15px',
      color: '#fff',
      float: 'left'
   },

   div: {
      background: '#585BA4',
      borderRadius: 6,
      position: 'relative',
      zIndex: 2,
      margin: '0 0 15px 0',
      padding: 10,
      width: 173,
      height:130
   },
   
   circles: {
      cursor: 'pointer',
      width: 28,
      height: 28,
      margin: 5,
      borderRadius: 100,
      border: 'none',
      float: 'left'
   },
   
   boxLeft: {
      float: 'left',
      marginTop: '10px',
   },

   boxRight: {
      position: 'absolute',
      top: '120px',
      right: '70px'
   },

   headerInfo: {
      position: 'relative',
      zIndex: 4,
      width: '100% !important',
      display: 'grid',
      gridTemplateColumns: '80% 10%',
   },
   
   btn: {
      position: 'absolute',
      zIndex: 1,
      right: '0',
      width: '100px !important',
      height: '50px',
   },

   aboutUser : {
      textAlign: 'center',
      color: '#16171E',
      width: '100%',
      height: '100%',
      marginTop: '50%',
      background: '#D1F4FF',
   }

})