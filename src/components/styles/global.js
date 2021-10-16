
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
   // @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;600&display=swap");
   /* // @import url('https://fonts.googleapis.com/css2?family=Pompiere&display=swap'); */

    * {
        box-sizing: border-box;
      }
      
      body {
        background-color: #181B19;
        color: white;
        font-family: 'poppins', sans-serif;
        margin: 0;
      }
      
      .root {
        display: flex;
        flex-direction: column;
      }
`