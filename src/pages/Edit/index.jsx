/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import { useMediaQuery } from "react-responsive";

import { api } from "../../services/api";

import { Menu } from "../../components/Menu";
import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import { Section } from "../../components/Section";
import { Input } from "../../components/Input";
import { FoodItem } from "../../components/FoodItem";
import { Textarea } from "../../components/Textarea";
import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";

import { Container, Form, Image, Category } from "./styles";
import { RxCaretLeft } from "react-icons/rx";
import { FiUpload } from "react-icons/fi";
import { RiArrowDownSLine } from "react-icons/ri";

export function Edit({ isAdmin }) {
    const desktop = useMediaQuery({ minWidth: 1024 });

    const [data, setData] = useState({});

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [search, setSearch] = useState("");
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [image, setImage] = useState(null);
    const [filename, setFilename] = useState("");
    const [updatedImage, setUpdatedImage] = useState(null);
    const [ingredients, setIngredients] = useState([]);
    const [newIngredient, setNewIngredient] = useState("");

    const navigate = useNavigate();
    const params = useParams();

    function handleBack() {
        navigate(-1);
    }

    useEffect(() => {
        async function fetchDish() {
            try {
                const response = await api.get(`dishes/${params.id}`, { withCredentials: true });
                setData(response.data || '');
            } catch (error) {
                console.error(error);
            }
        }

        fetchDish();
    }, [params.id]);

    useEffect(() => {
        if (data && data.ingredients) {
            setName(data.name || '');
            setCategory(data.category || '');
            setImage(data.image || '');
            const ingredients = data.ingredients.map((ingredient) => ingredient.name);
            setIngredients(ingredients);
            setPrice(data.price || '');
            setDescription(data.description || '');
        } else {
            setName(data.name || '');
            setCategory(data.category || '');
            setImage(data.image || '');
            setIngredients(ingredients || '');
            setPrice(data.price || '');
            setDescription(data.description || '');
        }

    }, [data]);

    function handleImageUpdate(e) {
        const file = e.target.files[0];
        setImage(file);
        setUpdatedImage(file);
        setFilename(file.name);
    }

    function handleAddIngredient() {
        if (!newIngredient) {
            return alert("Adicione um ingrediente válido!");
        }
        setIngredients(prevState => [...prevState, newIngredient]);
        setNewIngredient("");
    }

    function handleRemoveIngredient(deleted) {
        setIngredients(prevState => prevState.filter(ingredient => ingredient !== deleted));
    }

    async function handleEditDish() {

        validateData();

        try {
            const updatedDish = {
                name,
                category,
                price,
                description,
                ingredients
            }

            if (image) {
                const formData = new FormData();

                formData.append('image', image);

                await api.put(`/dishes/${params.id}`, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                    withCredentials: true,
                });

                alert("Imagem atualizada!");

            }



            // await api.patch(`/dishes/${params.id}`, updatedDish, { withCredentials: true })

            // alert("Prato atualizado com sucesso!");

        } catch (error) {
            if (error.response) {
                alert(error.response.data.message);
            } else {
                alert("Não foi possível cadastrar o prato!");
            }
        }

    }

    function validateData() {
        if (!image) {
            return alert("Adicione uma imagem!");
        }

        if (!name) {
            return alert("Preencha o nome!");
        }

        if (!category) {
            return alert("Selecione uma categoria!");
        }

        if (!price) {
            return alert("Preencha o preço!");
        }

        if (!description) {
            return alert("Preencha a descrição!");
        }

        if (ingredients.length === 0) {
            return alert("Adicione ingredientes!");
        }

        if (newIngredient) {
            return alert("Existe um ingrediente para ser adicionado. Clique em adicionar.")
        }

    }

    return (
        <Container>
            {
                !desktop &&

                <Menu
                    isAdmin={isAdmin}
                    isDisabled={true}
                    isMenuOpen={isMenuOpen}
                    setIsMenuOpen={setIsMenuOpen}
                />

            }

            <Header
                isAdmin={isAdmin}
                isMenuOpen={isMenuOpen}
                setIsMenuOpen={setIsMenuOpen}
                setSearch={setSearch}
            />

            <main>
                <Form>
                    <div>
                        <ButtonText onClick={handleBack}>
                            <RxCaretLeft />
                            voltar
                        </ButtonText>
                    </div>

                    <h1>Editar prato</h1>

                    <div>
                        <Section title="Imagem do prato">
                            <Image className="image">
                                <label htmlFor="image">
                                    <FiUpload size={'2rem'} />
                                    <span>{filename || "Selecione"}</span>
                                    <input type="file" id="image" onChange={handleImageUpdate} />
                                </label>
                            </Image>
                        </Section>

                        <Section title="Nome">
                            <Input
                                className="name"
                                placeholder="Ex.: Salada Ceasar"
                                type="text"
                                value={data.name && name}
                                onChange={e => setName(e.target.value)}
                            />
                        </Section>

                        <Section title="Categoria">
                            <Category className="category">
                                <label htmlFor="category">
                                    <select
                                        id="category"
                                        value={category}
                                        onChange={e => setCategory(e.target.value)}
                                    >
                                        <option value="">Selecionar</option>
                                        <option value="refeicao">Refeição</option>
                                        <option value="sobremesa">Sobremesa</option>
                                        <option value="bebida">Bebida</option>
                                    </select>
                                    <RiArrowDownSLine size="2rem" />
                                </label>
                            </Category>
                        </Section>
                    </div>

                    <div>
                        <Section title="Ingredientes">
                            <div className="ingredients">
                                {
                                    ingredients.map((ingredient, index) => (
                                        <FoodItem
                                            key={String(index)}
                                            value={ingredient}
                                            onClick={() => handleRemoveIngredient(ingredient)}
                                        />
                                    ))
                                }

                                <FoodItem
                                    isNew
                                    placeholder="Adicionar"
                                    value={newIngredient}
                                    onChange={e => setNewIngredient(e.target.value)}
                                    onClick={handleAddIngredient}
                                />
                            </div>
                        </Section>

                        <Section title="Preço">
                            <Input
                                className="price"
                                placeholder="R$ 00,00"
                                type="number"
                                value={price}
                                onChange={e => setPrice(e.target.value)}
                            />
                        </Section>
                    </div>

                    <div>
                        <Section title="Descrição">
                            <Textarea
                                placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
                                value={description}
                                onChange={e => setDescription(e.target.value)}
                            />
                        </Section>
                    </div>

                    <div className="save">
                        <Button
                            title="Salvar alteração"
                            onClick={handleEditDish}
                        />
                    </div>
                </Form>
            </main>
            <Footer />
        </Container>
    )
}