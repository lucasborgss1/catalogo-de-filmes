import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

}

body, input, button {
    font-family: 'Inter' , sans-serif;
}

body {
    color: #fff;
    background-color: black;
    height: 100vh;
}


`;
