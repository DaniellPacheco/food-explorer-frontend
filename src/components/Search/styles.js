import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    padding-left: 1.4rem;
    flex-grow: 1;
    border-radius: 0.5rem;

    background-color: ${({ theme }) => theme.COLORS.DARK_900};

    &:focus-within {
        border: 1px solid ${({ theme }) => theme.COLORS.LIGTH_100};
    }

    svg {
        color: ${({ theme }) => theme.COLORS.LIGTH_400};
    }

    input {
        max-width: 28.2rem;

        &:focus {
            border-top: 1px solid ${({ theme }) => theme.COLORS.LIGTH_100};
            border-bottom: 1px solid ${({ theme }) => theme.COLORS.LIGTH_100};
            border-radius: 0;
            border: none;
        }

        &:disabled {
            opacity: 0.5;
        }
    }
`;