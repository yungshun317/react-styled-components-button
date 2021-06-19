import React from "react";

import styled, { ThemeProvider } from "styled-components";

const StyledButton = styled.button`
    margin: 1rem;
    padding: 0.25rem 1rem;
    border-radius: 3px; 

    // [2] Theming
    color: ${props => props.theme.main};
    border: 1px solid ${props => props.theme.main};
    background-color: transparent;

    /* [1] Attach additional props
    color: ${props => props.primary ? "#4FC0E8" : "#FFFFFF"};
    border: 1px solid ${props => props.primary ? "palevioletred" : "#FFFFFF"};
    background-color: ${props => props.primary ? "#DB8270" : "#000000"};
    */
`;

// Default theme
StyledButton.defaultProps = {
	theme: {
		main: "palevioletred"
	}
}

// Define `props.theme``
const theme = {
	main: "mediumseagreen"
}

export default function Button() {
    return (
    	<>
            <StyledButton>Button</StyledButton>

            <ThemeProvider theme={theme}>
                <StyledButton>Themed Button</StyledButton>
            </ThemeProvider>
        </>
    );
}
