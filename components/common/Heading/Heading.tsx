import HeadingStyled from "./Heading-styled";

const Heading = (props: any) => <HeadingStyled>
    {props.children}
</HeadingStyled>
;

export default Heading;