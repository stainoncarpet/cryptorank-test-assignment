import React from 'react';
import styled from 'styled-components';

const AmountStyled = styled.div`
    display: flex;
    /* position: relative;
    isolation: isolate; */
    align-items: center;
    flex: 1 1 100%;


    .amount-container {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
    }


    input {
        display: inline-block;
        font-size: 2rem;
        padding: 3px 6px;
    }

    .amount-switches {
        /* top: 0;
        right: 0;
        position: absolute; */
        display: flex;
        flex-direction: column;
        margin-right: 1rem;
        margin-left: 0.5rem;
    }

    i {
        display: inline-block;
        border: 1px solid black;
        font-size: 1.25rem;
        cursor: pointer;
        padding-right: 8px;
        padding-left: 8px;
        vertical-align: middle;
    }

    h2 {
        font-size: 1.5rem;
        background-color: #e8e8e8;
        align-self: stretch;
        padding: 0.5rem 1rem;
        border-radius: 0.5rem;
    }

`

export default AmountStyled;
