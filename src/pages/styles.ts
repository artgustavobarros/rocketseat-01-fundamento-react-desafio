import styled from "styled-components";
import check from '../assets/check.svg'

export const Container = styled.div`
`

export const AddNewTask = styled.form`
  height: 3.375rem;
  display: flex;
  gap: .5rem;
  margin: -1.68rem auto 0;

  > input {
    padding: 1rem;
    background-color: ${({theme}) => theme.COLORS.GRAY_500};
    color: ${({theme}) => theme.COLORS.GRAY_100};
    border: none;
    border-radius: 8px;
    outline-color: ${({theme}) => theme.COLORS.PURPLE_DARK};
    flex: 1;
    
    &::placeholder{
      color: ${({theme}) => theme.COLORS.GRAY_300};
    }
  }

  > button {
    background-color: ${({theme}) => theme.COLORS.BLUE_DARK};
    color: ${({theme}) => theme.COLORS.GRAY_100};
    font-weight: bold;
    outline: none;
    border: none;
    border-radius: 8px;
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: .5rem;
    padding: 1rem;

    transition: .2s;
    &:hover{
      background-color: ${({theme}) => theme.COLORS.BLUE};
    }

    &:disabled{
      opacity: 0.7;
      cursor: not-allowed;
    }
  }
`

export const Content = styled.main`
  padding-inline: 22rem;

  > header {
    font-size: .875rem;
    font-weight: bold;

    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-block: 4rem 1.5rem;

    h2 {
      color: ${({theme}) => theme.COLORS.BLUE};

      span {
        font-size: .75rem;
        color: ${({theme}) => theme.COLORS.GRAY_200};
        background-color: ${({theme}) => theme.COLORS.GRAY_400};
        padding: 2px 8px;
        border-radius: 999px;
        margin-left: .5rem;
      }
    }

    h2 + h2 {
      color: ${({theme}) => theme.COLORS.PURPLE};
    }
  }
`

export const TaskList = styled.section`
  
`

export const Task = styled.article`
background-color: ${({theme}) => theme.COLORS.GRAY_500};
  width: 100%;
  height: 4.5rem;
  border: 1px solid ${({theme}) => theme.COLORS.GRAY_400};
  border-radius: 8px;

  padding: 1rem;

  & + & {
    margin-top: .75rem;
  }

  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  > button {
    background-color: transparent;
    border: none;
    color: ${({theme}) => theme.COLORS.GRAY_300};
    cursor: pointer;

    transition: .2s;
    &:hover{
      color: ${({theme}) => theme.COLORS.DANGER};
      background-color: ${({theme}) => theme.COLORS.GRAY_400};
    }
  }
`

export const RoundedCheckBox = styled.div`

  > label {
    font-size: .875rem;
    color: ${({theme}) => theme.COLORS.GRAY_100};
    display: flex;
    gap: 1rem;
    align-items: center;

    &:hover::before {
      background-color: ${({theme}) => theme.COLORS.GRAY_400};
      color: ${({theme}) => theme.COLORS.BLUE_DARK};
    }

    &::before{
      content: '';
      display: block;
      width: 1rem;
      height: 1rem;
      border: 2px solid ${({theme}) => theme.COLORS.BLUE};
      border-radius: 100%;

      &:hover {
      background-color: green;
    }
    }

  }

  > input {
    display: none;

    &:checked + label {
      text-decoration: line-through;
      color: ${({theme}) => theme.COLORS.GRAY_300};
    }
    
    &:checked + label::before{
      background-image: url(${check});
      background-position: center;
      background-repeat: no-repeat;
      background-color: ${({theme}) => theme.COLORS.PURPLE_DARK};
      border-color: transparent;
    }

    &:checked + label:hover::before{
      background-color: ${({theme}) => theme.COLORS.PURPLE};
    }
  }
`
