/* eslint-disable react/prop-types */
import { Container } from "./styles";

export function Textarea({ value, ...rest }) {
    return (
        <Container value={value} {...rest}>
            {/* {value} */}
        </Container>
    );
}