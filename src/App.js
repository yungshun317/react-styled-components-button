import React from "react";
import { createGlobalStyle } from "styled-components";

import Button from "./Button";

const GlobalStyle = createGlobalStyle`
    html {
    	font-size: 100%;
    }

    * {
    	font-family: 'Montserrat', sans-serif;
    }
`

export default function App() {
    return (
        <div>
            <GlobalStyle />
            <Button />
        </div>
    );
}
