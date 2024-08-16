import { Container, Logo } from "./styles.js";

import logo from "../../assets/logo.svg";

export default function SignIn() {
    return (
        <Container>
            <Logo>
                <img src={logo} alt="Food Explorer - Brand Logo" />
            </Logo>
        </Container>
    )
}