import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme, $isnew }) => $isnew == 'true' ? "transparent" : theme.COLORS.LIGTH_600};
  outline: ${({ theme, $isnew }) => $isnew == 'true' ? `1px dashed ${theme.COLORS.LIGTH_500}` : "none"};
  border-radius: 0.8rem;
  padding-right: 1.6rem;
  
  > button {
    border: none;
    background: transparent;
    color: ${({ theme }) => theme.COLORS.LIGTH_400};
    display: flex;
    align-items: center;
    color: ${({ theme, $isnew }) => $isnew == 'true' ? theme.COLORS.GRAY_300 : theme.COLORS.LIGTH_100};
  }
  
  > input {
    height: 3.2rem;
    width: 100%;
    padding: 0.8rem 0.8rem 0.8rem 1.6rem;
    border: none;
    outline: none;
    color: ${({ theme }) => theme.COLORS.LIGTH_100};
    background: ${({ theme }) => theme.COLORS.DARK_1000};

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.LIGTH_500};
    }
  }
`;