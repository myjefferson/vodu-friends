import {makeStyles} from '@material-ui/core/styles'

export const stylePresentation = makeStyles({
   text: {
      textAlign: 'center',
      color: '#fff',
      width: '100%',
   },

   alignCenter: {
      width: '100%',
      height: '100%',
      display: 'flex',
      justifyItems: 'center',
      alignItems: 'center',
   }
})