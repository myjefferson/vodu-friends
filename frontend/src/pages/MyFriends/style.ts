import styled from 'styled-components'
import {makeStyles, Theme, createStyles} from '@material-ui/core/styles'

export const Li = styled.li`
   cursor: pointer;
   position: relative;
   z-index: 1;
   display: block;
   float: left;
   padding: 12px;
   margin: 13px;
   width: 160px;
   
   color: white;
   background: #252732;
   border-radius: 4px;  
   border: 1px solid #454961;
`

export const H1 = styled.h1`
   float: left;
   color: white;
   margin: 13px;
`

export const Container = styled.div`
   position: absolute;
   top: 130px;
   overflow-y: auto !important;
   overflow-x: hidden;
   height: 83%;
   padding: 0 5px 0 0;
`

export const AlignRight = styled.div`
   position: absolute;
   top: 50px;
   right: 70px;
   float: right;
`


export const StyledModal = styled.div`
   position: absolute;
   left: 30px;
   border-radius: 5px;
   border: 1px solid #FFFFFF;
   color: white;
   padding: 10px;
   width: 500px;
   background: #393C4F;
`

export const useStyles = makeStyles((theme: Theme) =>{
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
      },
   })
})
