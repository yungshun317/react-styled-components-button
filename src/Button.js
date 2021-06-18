import React from "react";

import styled from "styled-components";

const StyledButton = styled.button`
    color: #FFFFFF;
    border: 2px solid palevioletred;
    background-color: #DB8270;
`;

export default function Button() {
    return (
        <StyledButton>Button</StyledButton>
    );
}
