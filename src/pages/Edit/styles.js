import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-rows: 11.4rem auto 7.7rem;
  grid-template-areas:
    "header"
    "content"
    "footer";
  
  > main {
    width: 100%;
    grid-area: content;
    justify-self: center;
  }

  .ingredients {
    display: flex;
    flex-wrap: wrap;
    gap: 1.6rem;
    padding: 0.8rem;
    border-radius: 0.8rem;
    background-color: ${({ theme }) => theme.COLORS.DARK_800};
    
    &:focus-within {
      outline: 1px solid ${({ theme }) => theme.COLORS.LIGTH_100};
    }

    input {
      background-color: transparent;
    }

  }

  .save {
    > button {
      padding: 1.2rem 2.4rem;
      background-color: ${({ theme }) => theme.COLORS.TOMATO_400};
    }
  }
  
  @media (min-width: 1024px) {
    height: 100vh;
    grid-template-rows: 9.6rem auto 7.7rem;

    > main {
      overflow-y: auto;
      &::-webkit-scrollbar {
        width: 0.8rem;
      }
      &::-webkit-scrollbar-thumb {
        background-color: ${({ theme }) => theme.COLORS.DARK_900};
        border-radius: 0.8rem;
      }
    }

    .save {
      justify-content: flex-end;

      > button {
        max-width: 17.2rem;
      }
    }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  width: calc(100% - 6.4rem);
  margin: 1.1rem 3.2rem 5.3rem;

  > header {
    display: flex;
    flex-direction: column;

    h1 {
      margin-top: 2.4rem;
      line-height: 140%;
      color: ${({ theme }) => theme.COLORS.LIGTH_300};
      font-family: "Poppins", sans-serif;
      font-weight: 500;
    }
  }

  > div {
    display: flex;
    flex-direction: column;
    gap: 2.4rem;

    section {
      width: 100%;
    }

    section input {
      background-color: ${({ theme }) => theme.COLORS.DARK_800};
      border-radius: 0.8rem;
    }
  }

  @media (min-width: 1024px) {
    gap: 3.2rem;

    width: calc(100% - 24.8rem);
    margin: 4rem 12.4rem 11.6rem;

    > div {
      flex-direction: row;
      gap: 3.2rem;

      &:nth-child(3) {
        section:nth-of-type(1) {
          max-width: 22.9rem;
        }

        section:nth-of-type(3) {
          max-width: 36.4rem;        }

      }

      &:nth-child(4) {
        section:nth-of-type(2) {
          max-width: 25.1rem;
        }
      }


    }
  }
`;

export const Image = styled.div`
  padding: 1.2rem 3.2rem;
  border-radius: 0.8rem;
  position: relative;

  background-color: ${({ theme }) => theme.COLORS.DARK_800};
  color: ${({ theme }) => theme.COLORS.LIGTH_100};

  &:focus-within {
    outline: 1px solid ${({ theme }) => theme.COLORS.LIGTH_100};
  }

  > label {
    display: flex;
    gap: 0.8rem;
    cursor: pointer;

    span {
      font-family: "Poppins", sans-serif;
      font-size: 1.4rem;
      line-height: 2.4rem;

      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;

      max-width: calc(100vw - 16rem);
    }

    input {
      position: absolute;
      right: 0;
      z-index: -1;

      width: 100%;
    }

    svg, span {
      transition: filter 0.2s;
    }

    &:hover {
      svg, span {
        filter: brightness(0.9);
      }
    }
  }

  @media (min-width: 1024px) {
    > label {
      span {
        max-width: 13.3rem;
      }
      
      input {
        max-width: 22.9rem;
      }
    }
  }
`;

export const Category = styled.div`
  > label {
    position: relative;

    select {
      border: none;
      -webkit-appearance: none;
      cursor: pointer;
      
      width: 100%;
      padding: 1.2rem 1.6rem;
      border-radius: 0.8rem;
      
      background-color: ${({ theme }) => theme.COLORS.DARK_800};
      color: ${({ theme }) => theme.COLORS.LIGTH_400};
    
      font-weight: 400;
      font-size: 1.4rem;
      line-height: 160%;
    }
    
    svg {
      color: ${({ theme }) => theme.COLORS.LIGTH_400};

      position: absolute;
      top: 0;
      right: 1.6rem;

      cursor: pointer;
      pointer-events: none;
      transition: filter 0.2s;
    }

    &:hover {
      svg {
        filter: brightness(0.9);
      }
    }
  }
`;