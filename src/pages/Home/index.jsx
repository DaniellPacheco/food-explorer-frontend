/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import { useMediaQuery } from "react-responsive";

import { api } from "../../services/api";

import { Header } from "../../components/Header";
import { Menu } from "../../components/Menu";
import { Section } from '../../components/Section';
import { Food } from "../../components/Food";
import { Footer } from '../../components/Footer';

import { Container, Content } from "./styles";

import homeBannerMobile from "../../assets/banner-mobile.png";
import homeBanner from "../../assets/home-banner.png";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

export default function Home({ isAdmin, user_id }) {
    const desktop = useMediaQuery({ minWidth: 1024 });

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const [refeicoes, setRefeicoes] = useState([]);
    const [sobremesas, setSobremesas] = useState([]);
    const [bebidas, setBebidas] = useState([]);

    const [search, setSearch] = useState("");

    useEffect(() => {
        async function fetchDishes() {
            const response = await api.get(`/dishes?search=${search}`, { withCredentials: true });
            const refeicoes = response.data.filter(dish => dish.category === "refeicao");
            const sobremesas = response.data.filter(dish => dish.category === "sobremesa");
            const bebidas = response.data.filter(dish => dish.category === "bebida");

            setRefeicoes(refeicoes)
            setSobremesas(sobremesas);
            setBebidas(bebidas);
        }

        fetchDishes();
    }, [search])

    return (
        <Container>

            {

                !desktop &&

                <Menu
                    isAdmin={isAdmin}
                    isMenuOpen={isMenuOpen}
                    setIsMenuOpen={setIsMenuOpen}
                    setSearch={setSearch}
                />
            }


            <Header
                isAdmin={isAdmin}
                isMenuOpen={isMenuOpen}
                setIsMenuOpen={setIsMenuOpen}
                setSearch={setSearch}
            />

            <main>
                <div>
                    <header>
                        <img src={desktop ? homeBanner : homeBannerMobile} alt="Macarrons coloridos com diversas frutas" />

                        <div>
                            <h1>Sabores inigualáveis</h1>
                            <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
                        </div>
                    </header>


                    <Content>
                        <Section title="Refeições">
                            <Swiper
                                className='mySwiper, swiper-container'
                                pagination={{ clickable: true }}
                                modules={[Pagination]}
                                spaceBetween={desktop ? "27" : "16"}
                                slidesPerView={desktop ? 4 : 2}
                                navigation={desktop ? true : false}
                                loop={true}
                                grabCursor={true}
                            >
                                {refeicoes.map((item) => (
                                    <SwiperSlide className='swiper-slide' key={item.id}>
                                        <Food className="swiper-slide" key={item.id}
                                            isAdmin={isAdmin}
                                            data={item}
                                            user_id={user_id}
                                            isFavorite={false}
                                        />
                                    </SwiperSlide>

                                ))}
                            </Swiper>
                        </Section>

                        <Section title="Sobremesas">
                            <Swiper
                                className='mySwiper, swiper-container'
                                pagination={{ clickable: true }}
                                modules={[Pagination]}
                                spaceBetween={desktop ? "27" : "16"}
                                slidesPerView={desktop ? 4 : 2}
                                navigation={desktop ? true : false}
                                loop={true}
                                grabCursor={true}
                            >
                                {sobremesas.map((item) => (
                                    <SwiperSlide className='swiper-slide' key={item.id}>
                                        <Food className="swiper-slide" key={item.id}
                                            isAdmin={isAdmin}
                                            data={item}
                                            user_id={user_id}
                                            isFavorite={false}
                                        />
                                    </SwiperSlide>

                                ))}
                            </Swiper>

                        </Section>

                        <Section title="Bebidas">
                            <Swiper
                                className='mySwiper, swiper-container'
                                pagination={{ clickable: true }}
                                modules={[Pagination]}
                                spaceBetween={desktop ? "27" : "16"}
                                slidesPerView={desktop ? 4 : 2}
                                navigation={desktop ? true : false}
                                loop={true}
                                grabCursor={true}
                            >
                                {bebidas.map((item) => (
                                    <SwiperSlide className='swiper-slide' key={item.id}>
                                        <Food className="swiper-slide" key={item.id}
                                            isAdmin={isAdmin}
                                            data={item}
                                            user_id={user_id}
                                            isFavorite={false}
                                        />
                                    </SwiperSlide>

                                ))}
                            </Swiper>
                        </Section>
                    </Content>


                </div>
            </main>

            <Footer />
        </Container>
    )
}