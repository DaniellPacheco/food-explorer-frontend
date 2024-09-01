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

    const { signIn } = useAuth();

    function handleSignIn() {
        if (!email || !password) {
            return alert("Preencha todos os campos!");
        }

        if (!/\S+@\S+\.\S+/.test(email)) {
            return alert("Email inválido!");
        }

        if (password.length < 6) {
            return alert("A senha deve ter pelo menos 6 caracteres!");
        }


        signIn({ email, password });
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

                <Button title="Entrar" onClick={handleSignIn} />

                <Link to="/register">
                    Criar uma conta
                </Link>
            </Form>
        </Container>
    );
}