import React from 'react';
import styled from 'styled-components';

const HeaderStyled = styled.header`
    min-height: 100px;
    background-color: #fffff0;
    display: flex;
    align-items: center;
    padding: 1rem 2rem;
    justify-content: space-between;

    span {
        font-size: 2rem;
        text-transform: uppercase;
        cursor: pointer;
    }

    ul {
        list-style: none;
        display: flex;
    }

    li {
        padding: 0.5rem 1rem;
        font-size: 1.5rem;
    }
`;

export default HeaderStyled;
