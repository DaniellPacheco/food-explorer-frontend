import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1.4rem;

  color: ${({ theme }) => theme.COLORS.LIGTH_300};

  button {
    border: none;
    background: none;

    color: ${({ theme }) => theme.COLORS.LIGTH_300};
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }

  @media (min-width: 1024px) {
    svg,
    span {
      font-weight: 700;
      font-size: 2rem;
      line-height: 160%;
    }
  }
`;