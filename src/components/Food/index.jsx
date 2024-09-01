/* eslint-disable react/prop-types */
import { useState } from "react";

import { BiPencil } from "react-icons/bi";
import { FiHeart } from "react-icons/fi";
import { RxCaretRight } from "react-icons/rx";

import { useMediaQuery } from "react-responsive";
import theme from "../../styles/theme";

import { useParams, useNavigate } from 'react-router-dom';
import { api } from '../../services/api';

import { Container, Title, Order } from "./styles";
import { NumberPicker } from '../../components/NumberPicker';
import { Button } from "../../components/Button";

export function Food({ data, isAdmin, isFavorite, ...rest }) {
    const isDesktop = useMediaQuery({ minWidth: 1024 });

    const [favorite, setFavorite] = useState(isFavorite);
    const [favoriteColor, setFavoriteColor] = useState('#00070A');
    console.log(favorite);

    const params = useParams();
    const navigate = useNavigate();

    const [number, setNumber] = useState(1);


    function handleFavorite() {
        if (favorite) {
            setFavoriteColor('#AB4D55')
            setFavorite(false);
        } else {
            setFavoriteColor('#00070A');
            setFavorite(true);

        }
    }

    function handleEdit() {
        navigate(`/edit/${data.id}`);
    }

    function handleDetails() {
        navigate(`/dishes/${data.id}`);
    }

    return (
        <Container
            {...rest}
            isadmin={isAdmin}
        >
            {isAdmin ? (
                <BiPencil size={"2.4rem"} onClick={handleEdit} />
            ) : (
                <FiHeart
                    size={"2.4rem"}
                    fill={favoriteColor}
                    // fill={favoriteColor ? '#AB4D55' : '#000'}
                    onClick={handleFavorite}
                />
            )}

            <img
                src={`${api.defaults.baseURL}/files/${data.image}`}
                alt="Imagem do prato."
                onClick={() => handleDetails(data.id)}
            />

            <Title>
                <h2>{data.name}</h2>
                <RxCaretRight
                    size={isDesktop ? "2.4rem" : "1.4rem"}
                    onClick={() => handleDetails(data.id)}
                />
            </Title>

            {isDesktop && <p>{data.description}</p>}
            <span>R$ {data.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>

            {!isAdmin &&
                <Order>
                    <NumberPicker number={number} setNumber={setNumber} />
                    <Button title="incluir" />
                </Order>
            }
        </Container>
    );
}