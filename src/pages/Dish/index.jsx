/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import { useMediaQuery } from "react-responsive";
import { useParams, useNavigate } from 'react-router-dom';

import { api } from "../../services/api";

import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import { Button } from "../../components/Button";
import { Tag } from "../../components/Tag";
import { NumberPicker } from "../../components/NumberPicker";
import { Footer } from "../../components/Footer";

import { Container, Content } from "./styles";
import { RxCaretLeft } from 'react-icons/rx';

export function Dish({ isAdmin }) {
    const desktop = useMediaQuery({ minWidth: 1024 });

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [data, setData] = useState(null);
    const [number, setNumber] = useState(0);

    const params = useParams();
    const navigate = useNavigate();

    function handleBack() {
        navigate(-1);
    }

    function handleEdit() {
        navigate(`/edit/${params.id}`);
    }

    function handleInclude() {
        alert('Botão não desenvolvido.')
    }

    useEffect(() => {
        async function fetchDish() {
            const response = await api.get(`dishes/${params.id}`, { withCredentials: true });
            setData(response.data);
        }

        fetchDish();
    }, []);

    return (
        <Container>
            <Header
                isAdmin={isAdmin}
                isMenuOpen={isMenuOpen}
                setIsMenuOpen={setIsMenuOpen}
            />

            {
                data &&
                <main>
                    <div>
                        <ButtonText onClick={handleBack}>
                            <RxCaretLeft />
                            voltar
                        </ButtonText>
                    </div>

                    <Content>
                        <img src={`${api.defaults.baseURL}/files/${data.image}`} alt="" />


                        <div>
                            <h1>{data.name}</h1>
                            <p>{data.description}</p>

                            {
                                data.ingredients &&
                                <section>
                                    {
                                        data.ingredients.map(ingredient => (
                                            < Tag
                                                key={String(ingredient.id)}
                                                title={ingredient.name}
                                            />
                                        ))
                                    }
                                </section>
                            }

                            <div className='buttons'>
                                {isAdmin ?
                                    <Button
                                        title="Editar prato"
                                        className="edit"
                                        onClick={handleEdit}
                                    /> :
                                    <>
                                        <NumberPicker number={number} setNumber={setNumber} />
                                        <Button
                                            title={
                                                desktop ?
                                                    `incluir ∙ R$ ${(data.price * number).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}` :
                                                    `pedir ∙ R$ ${(data.price * number).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`
                                            }
                                            className="include"
                                            isCustomer={!desktop}
                                            onClick={handleInclude}
                                        />
                                    </>
                                }
                            </div>
                        </div>
                    </Content>
                </main>
            }



            <Footer />
        </Container>
    );
}