import React from 'react';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

const LayoutStyled = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
`;

export const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    a {
        color: black;
        text-decoration: none;
    }
`

export default LayoutStyled;