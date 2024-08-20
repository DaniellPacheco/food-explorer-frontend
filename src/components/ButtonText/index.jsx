/* eslint-disable react/prop-types */
import { Container } from "./styles";

export function ButtonText({ children, ...rest }) {
    return (
        <Container
            type="button"
            {...rest}
        >
            {children}
        </Container>
    )
}