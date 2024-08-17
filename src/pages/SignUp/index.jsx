import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";

import { api } from "../../services/api";

import { Container, Form, Logo } from "./styles";

import { Section } from '../../components/Section';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import logo from "../../assets/logo.svg";

export default function SignIn() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    // const navigate = useNavigate();

    function handleSignUp() {
        if (!name || !email || !password) {
            return alert("Preencha todos os campos!");
        }

        if (!/\S+@\S+\.\S+/.test(email)) {
            return alert("Email inválido!");
        }

        if (password.length < 6) {
            return alert("A senha deve ter pelo menos 6 caracteres!");
        }

        setLoading(true);

        api.post("/users", { name, email, password })
            .then(() => {
                alert("Usuário criado com sucesso!");
                // navigate(-1);
            })
            .catch((error) => {
                if (error.response) {
                    alert(error.response.data.message);
                } else {
                    alert("Não foi possível cadastrar o usuário!");
                }
            })
            .finally(() => setLoading(false));
    }

    return (
        <Container>
            <Logo>
                <img src={logo} alt="Logo" />
            </Logo>

            <Form>
                <h2>Crie sua conta</h2>

                <Section title="Name">
                    <Input
                        placeholder="Exemplo: Maria da Silva"
                        type="text"
                        onChange={e => setName(e.target.value)}
                    />
                </Section>

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

                <Button title="Entrar" onClick={handleSignUp} loading={loading} />

                {/* <Link to="/">
                    Criar uma conta
                </Link> */}
            </Form>
        </Container>
    );
}