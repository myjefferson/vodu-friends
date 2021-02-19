import styled from 'styled-components';

export const Panel = styled.div`
   position: relative;
   z-index: 1;
   width: 280px;
   height: 100vh;
   margin: 0;
   padding: 30px 15px 30px 30px;
   overflow-x: hidden;

`

export const Logo = styled.img`
   display: block;
   width: 200px;
   margin: 0 0 30px 0;
`

export const AlignRight = styled.div`
   float: right;
`

export const Groups = styled.li`
   cursor: pointer;
   display: block;
   color: white;
   background: #2E303D;
   padding: 15px;
   border-radius: 3px;
   margin: 0 0 10px 0;
`

export const A = styled.a`
   text-decoration: none;
`