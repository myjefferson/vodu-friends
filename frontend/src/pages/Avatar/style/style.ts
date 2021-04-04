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

   boxBtnEdit: {
      position: 'absolute',
      zIndex: 4,
      top: '50px',
      width: '250px',
      right: '45px',
      display: 'grid',
      gridTemplateColumns: '40% 52%',
      background: 'none'
   },

   btnEdit: {
      position: 'absolute',
      zIndex: 4,
      right: '20px',
      width: '130px !important',
      height: '50px',
      outline: 'none'
   },
   
   btnSave: {
      width: '100px !important',
      height: '50px',
      outline: 'none'
   }, 

   btnCancel: {
      fontSize: '19px',
      width: '100px',
      height: '50px',
      border: 'none',
      color: "#FF0000",
      background: 'none',
      cursor: 'pointer',
      outline: 'none'
   },

   aboutUser : {
      textAlign: 'center',
      color: '#16171E',
      width: '100%',
      height: '100%',
      marginTop: '50%',
      background: '#D1F4FF',
   },

   actions: {
      width: '210px'
   },

   actionsGrid: {
      justifyItems: 'center',
      display: 'grid',
      gridTemplateColumns: '40% 14%'
   },

   actionsAlign: {
      zIndex: 2,
      position: 'fixed',
      bottom: '80px',
      width: '100%',
   },

   btnGoodActions: {
      fontSize: '12px',
      textAlign: 'center',
      color: '#fff',
      margin: '0 0 0 20px',
      width: '45px',
      height: '45px',
      cursor: 'pointer',
      borderRadius: '100px',
      border: '3px solid #14AAFF',
      backgroundColor: '#3C4060',
      padding: '0 0 0 0'
   },

   btnBadActions: {
      fontSize: '12px',
      textAlign: 'center',
      color: '#fff',
      margin: '0 0 0 20px',
      width: '45px',
      height: '45px',
      cursor: 'pointer',
      borderRadius: '100px',
      border: '3px solid #FF2C2C',
      backgroundColor: '#3C4060',
      padding: '0 0 0 0'
   },

   imgActions: {
      margin: '6px 0 0 -2px',
      width: '27px',
      height: '27px',
   },

   pTitleGood: {
      textAlign: 'center',
      fontWeight: 'bold',
      color: '#FF2C2C'
   },

   pTitleBad: {
      textAlign: 'center',
      fontWeight: 'bold',
      color: '#14AAFF'
   },

   pActions: {
      width: 'max-content'
   }
})