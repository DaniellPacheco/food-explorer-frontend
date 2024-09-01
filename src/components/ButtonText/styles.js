import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  align-items: center;
  background: none;
  border: none;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 2.4rem;
  line-height: 140%;
  color:  ${({ theme }) => theme.COLORS.LIGTH_100};
  
  > svg {
    font-size: 3.2rem;
    color: ${({ theme }) => theme.COLORS.LIGTH_100};
  }
  
  @media (min-width: 1024px) {
    font-weight: 700;
  }
`;