import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family:'DM Sans' ;
    
    
}

html {
    overflow-x: hidden; /*significa que qualquer conteúdo que ultrapasse a largura do elemento HTML não será exibido, ele será simplesmente recortado.*/
    scroll-behavior: smooth;
}


`;
