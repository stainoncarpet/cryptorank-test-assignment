import React from 'react';
import Container from '../../Container/Container';

import MainStyled from "./Main-styled";

const Main = (props: any) => {
    return (
        <MainStyled>
            <Container>
                {props.children}
            </Container>
        </MainStyled>
    );
};

export default Main;
