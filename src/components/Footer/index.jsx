import { Container, Brand, Copyright } from "./styles";

import logoFooter from "../../assets/footer-brand.svg";

export function Footer() {
    return (
        <Container>
            <Brand>
                <img src={logoFooter} alt="Logo" />
            </Brand>

            <Copyright>
                © 2023 - Todos os direitos reservados.
            </Copyright>
        </Container>
    );
}