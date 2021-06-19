import React from "react";

import styled from "styled-components";

const StyledButton = styled.button`
    margin: 1rem;
    padding: 0.25rem 1rem;
    font-size: 1rem;
    border-radius: 3px; 

    color: ${props => props.primary ? "#4FC0E8" : "#FFFFFF"};
    border: 1px solid ${props => props.primary ? "palevioletred" : "#FFFFFF"};
    background-color: ${props => props.primary ? "#DB8270" : "#000000"};
`;

export default function Button() {
    return (
    	<>
            <StyledButton>Button</StyledButton>
            <StyledButton primary>Primary Button</StyledButton>
        </>
    );
}
