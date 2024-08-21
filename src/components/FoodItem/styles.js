import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;

  background-color: ${({ theme, isNew }) =>
        isNew ? "transparent" : theme.COLORS.LIGTH_600};
  outline: ${({ theme, isNew }) =>
        isNew ? `1px dashed ${theme.COLORS.LIGTH_500}` : "none"};
  
  border-radius: 0.8rem;
  padding-right: 1.6rem;
  
  > button {
    border: none;
    background: none;

    display: flex;
    align-items: center;
    
    color: ${({ theme, isNew }) =>
        isNew ? theme.COLORS.GRAY_300 : theme.COLORS.LIGTH_100};
  }
  
  > input {
    height: 3.2rem;
    width: 100%;
    
    padding: 0.8rem 0.8rem 0.8rem 1.6rem;
    border: none;
    outline: none;
    
    color: ${({ theme }) => theme.COLORS.LIGTH_100};
    background: transparent;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.LIGTH_500};
    }
  }
`;