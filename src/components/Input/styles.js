import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    > input {
        height: 4.8rem;
        width: 100%;

        padding: 1.2rem 1.4rem;
        color: ${({ theme }) => theme.COLORS.LIGTH_400};
        background: ${({ theme }) => theme.COLORS.DARK_900};
        border-radius: 0.5rem;
        border: 0;

        &::placeholder {
            color: ${({ theme }) => theme.COLORS.LIGTH_700};
        }

        &::focus {
            border: 1px solid ${({ theme }) => theme.COLORS.LIGTH_100};
        }
    }
`;