import {createGlobalStyle} from 'styled-components'

export default createGlobalStyle`
   @font-face{ 
      font-damily: gotham;
      url(../fonts/gotham-el.ttf)
   }
   
   body{
      margin: 0;
      padding: 0;
      font-family: gotham, sans-serif;
      font-size: 19px;
   }

   /*scale*/
   #wrapper{
      width: 100vw;
      height: 100vh;

      display: grid;
      grid-template-columns: 22% 80%;
   }

   div#menuScale{
      
   }

   div#containerScale{
      width: 100%;
      padding: 3%;
   }


   hr{
      margin: 5px 0 20px 0;
   }

   label#tip{
      color: #B2B2B2;
   }

   /*All Buttons*/
   #btnRed, #btnGreen, #btnBlue, #btnDefault{
      display: block;
      cursor: pointer;

      width: 100%;
      text-align: center;
      font-size: 18px;
      color: #252525;
      border-radius: 4px;
      padding: 12px 10px 12px 10px;
      margin: 0 0 20px 0;
   }

   #btnRed{
      background: #FF2C2C;
      border: 1px solid #FF2C2C;
   }

   #btnGreen{
      background: #0DFF42;
      border: 1px solid #0DFF42;
   }

   #btnBlue{
      background: #00D8D8;
      border: 1px solid #00D8D8;
   }

   #btnDefault{
      background: #D3D3D3;
      border: 1px solid #D3D3D3;
   }

   /*input*/
   input[type=text]{
      display: block;
      cursor: pointer;

      width: 100%;

      background: #2E303D;
      font-size: 18px;
      color: white;
      border: none;
      border-radius: 4px;
      padding: 12px 10px 12px 10px;
      margin: 15px 0 20px 0;
      transition: 0.6s;
   }

   /*scrolls*/
   ::-webkit-scrollbar{
      width: 5px;
      background: #16171E;
   }

   ::-webkit-scrollbar-thumb {
      background: #242631; 
   }

   /*Default Animations*/
   .show{
      display: block;
      transition: 1s;
   }

   .hidden{
      display: none !important;
      transition: 1s;
   }

   /*Footer*/
   footer{
      background: #0E0F13;
      position: fixed;
      z-index: 5;
      width: 100%;
      bottom: 0;
      left: 0;
   }

   footer p {
      text-align: center;
      color: white;
      font-size: 13px;
   }
`