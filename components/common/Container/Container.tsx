import React from 'react';

import ContainerStyled from './Container-styled';

const Container = (props: any) => {
    return (
        <ContainerStyled>
            {props.children}
        </ContainerStyled>
    );
};

export default Container;
