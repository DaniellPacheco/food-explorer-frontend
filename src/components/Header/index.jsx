/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

import { useAuth } from "../../hooks/auth";

import { FiLogOut, FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";

import { Container, Menu, Brand, Logout } from "./styles";

import brand from "../../assets/brand.svg";
import brandAdmin from "../../assets/brand-admin.svg";
import brandAdminMobile from "../../assets/brand-mobile.svg";

import { Search } from "../../components/Search";
import { Button } from "../../components/Button";


export function Header({ isAdmin = false, isDisabled, isMenuOpen, setIsMenuOpen, setSearch }) {
    const isDesktop = useMediaQuery({ minWidth: 1024 });
    const logo = isAdmin ? (isDesktop ? brandAdmin : brandAdminMobile) : brand;

    const { signOut } = useAuth();
    const navigate = useNavigate();

    function handleFavorites() {
        navigate("/favorites");
    }

    function handleNew() {
        navigate("/new");
    }

    function handleSignOut() {
        navigate("/");
        signOut();
    }

    return (
        <Container>
            {!isDesktop && (
                <Menu>
                    {!isMenuOpen ?
                        <FiMenu className="fi-menu-icon" onClick={() => setIsMenuOpen(true)} /> :
                        <>
                            <MdClose size={"1.8rem"} onClick={() => setIsMenuOpen(false)} />
                            <span>Menu</span>
                        </>
                    }
                </Menu>
            )}

            {(isDesktop || !isMenuOpen) && (
                <>
                    <Brand>
                        <img src={logo} alt="Logo" />
                    </Brand>

                    {isDesktop && <Search isDisabled={isDisabled} setSearch={setSearch} />}

                    {isDesktop &&
                        <button className="favorites" onClick={handleFavorites}>Meus favoritos</button>
                    }

                    {isAdmin ?
                        (isDesktop && <Button className="new" title="Novo prato" onClick={handleNew} />) :
                        <Button className="orders" title={isDesktop ? "Pedidos" : undefined} isCustomer orderCount={0} />
                    }

                    {isDesktop &&
                        <Logout onClick={handleSignOut}>
                            <FiLogOut size={"3.2rem"} />
                        </Logout>
                    }
                </>
            )}
        </Container>
    )
}