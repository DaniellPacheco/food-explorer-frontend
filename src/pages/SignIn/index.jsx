import { useState } from 'react';
import { Link } from "react-router-dom";

import { useAuth } from '../../hooks/auth';

import { Container, Form, Logo } from "./styles";

import { Section } from '../../components/Section';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import logo from "../../assets/logo.svg";

export default function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const { signIn } = useAuth();

    function handleSignIn() {
        setLoading(true);

        signIn({ email, password }).finally(() => setLoading(false));
    }

    return (
        <Container>
            <Logo>
                <img src={logo} alt="Logo" />
            </Logo>

            <Form>
                <h2>Faça seu login</h2>

                <Section title="Email">
                    <Input
                        placeholder="Exemplo: exemplo@exemplo.com.br"
                        type="email"
                        onChange={e => setEmail(e.target.value)}
                    />
                </Section>

                <Section title="Senha">
                    <Input
                        placeholder="No mínimo 6 caracteres"
                        type="password"
                        onChange={e => setPassword(e.target.value)}
                    />
                </Section>

                <Button title="Entrar" onClick={handleSignIn} loading={loading} />

                {/* <Link to="/">
                    Criar uma conta
                </Link> */}
            </Form>
        </Container>
    );
}