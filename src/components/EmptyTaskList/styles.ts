import styled from "styled-components";

export const Container = styled.section`
  border-top: 1px solid ${({theme}) => theme.COLORS.GRAY_400};
  border-radius: 8px;
  padding-top: 4rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  > h1 {
    margin-top: 1rem;
    color: ${({theme}) => theme.COLORS.GRAY_300};
    font-weight: bold;
  }

  > p {
    color: ${({theme}) => theme.COLORS.GRAY_300};
  }
`