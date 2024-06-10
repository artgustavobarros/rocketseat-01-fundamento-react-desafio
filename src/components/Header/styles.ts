import styled from "styled-components";

export const Container = styled.header`
  height: 12.5rem;
  background-color: ${({theme}) => theme.COLORS.GRAY_700};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: .75rem;

  > h1 {
    color: ${({theme}) => theme.COLORS.BLUE};
    font-weight: bold;

    span {
      color: ${({theme}) => theme.COLORS.BLUE_DARK};
    }
  }
`