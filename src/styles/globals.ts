import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    background-color: ${({theme}) => theme.COLORS.GRAY_600};
  }

  body, input, button, textarea{
    font-family: "Inter", sans-serif;
    line-height: 1.4;
    font-size: 1rem;
  }

  :focus{
    outline: transparent;
    box-shadow: 0 0 0 2px ${({theme}) => theme.COLORS.PURPLE_DARK};
  }
`
