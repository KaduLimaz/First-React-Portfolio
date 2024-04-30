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

::-webkit-scrollbar {
    width: 10px;
    background-color: #131c31;

    
}

::-webkit-scrollbar-thumb {
        background-image: linear-gradient(#7eadfc,#131c31);
        border-radius: 10px;
    }


`;
