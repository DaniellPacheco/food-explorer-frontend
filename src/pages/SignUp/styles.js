import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;

    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    gap: 7.3rem;
    margin-inline: 5rem;

    @media (min-width: 1024px) {
        margin-inline: 13.1rem;
        flex-direction: row;
        flex-wrap: nowrap;
        align-items: center;
        justify-content: space-between;
    }
`;

export const Logo = styled.div`
    width: 100%;

    display: flex;
    justify-content: center;

    > img {
        width: 100%;
        max-width: 27.8rem;
    }

    @media (min-width: 1024px) {
        > img {
            max-width: 32.4rem;
        }
    }
`;
export const Form = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: 3.2rem;

    > h2 {
        display: none;
    }

    > section h2 {
        margin-bottom: 0.8rem;
    }

    > section input {
        background-color: ${({ theme }) => theme.COLORS.DARK_700};
        border-radius: 0.8rem;
    }

    > a {
        color: ${({ theme }) => theme.COLORS.LIGTH_100};
        text-align: center;
        font-family: "Poppins", sans-serif;
        font-size: 1.4rem;
        line-height: 2.4rem;
    }

    @media (min-width: 1024px) {
        padding: 6.4rem;
        border-radius: 1.6rem;

        background-color: ${({ theme }) => theme.COLORS.DARK_700};

        > h2 {
            display: initial;
            font-family: "Poppins", sans-serif;
            font-weight: 500;
            font-size: 3.2rem;
            line-height: 140%;
            text-align: center;
        }

        > section input {
            background-color: transparent;

            border: 1px solid ${({ theme }) => theme.COLORS.WHITE};
            border-radius: 0.5rem;
        }
    }
`;