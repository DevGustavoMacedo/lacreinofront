import styled, { css } from 'styled-components'

export const Main = styled.main`
  width: 100%;
  display: flex;
  padding: 4rem 4rem 0px;
  justify-content: space-between;
  align-items: flex-start;

  > div {
    max-width: 540px;
  }

  @media (max-width: 1040px) {
    flex-direction: column;
    align-items: center;
    padding: 2rem 2rem 0;
    gap: 2rem;
  }

  @media (max-width: 520px) {
    padding: 1rem 1rem 0;
  }
`

export const Title = styled.h2`
  color: ${(props) => props.theme.colors.text1};
  font-size: 3rem;

  @media (max-width: 1040px) {
    font-size: 2rem;
  }

  @media (max-width: 520px) {
    font-size: 1.5rem;
  }
`

export const Text = styled.p<{ isHome: boolean }>`
  line-height: 2rem;
  margin-top: 2rem;
  font-size: 1.5rem;
  color: ${(props) => props.theme.colors.text2};

  ${(props) =>
    !props.isHome &&
    css`
      border-left: 5px solid ${(props) => props.theme.colors.primary};
      padding-left: 1rem;
    `}

  @media (max-width: 1040px) {
    line-height: 1.5rem;
    margin-top: 1rem;
    font-size: 1rem;
  }

  @media (max-width: 520px) {
    line-height: 1.25rem;
    margin-top: 0.875rem;
    font-size: 0.875rem;
  }
`

export const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 3rem;
  max-width: 450px;

  a {
    padding: 0.75rem 2rem;
    font-size: 1.125rem;
    font-weight: 700;
    border-radius: 0.5rem;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 4px 4px;
    transition: all 0.2s ease 0s;

    :hover {
      opacity: 0.7;
    }

    :first-child {
      background-color: ${(props) => props.theme.colors.primary};
      color: ${(props) => props.theme.colors.secondary};
    }

    :last-child {
      background-color: ${(props) => props.theme.colors.secondary};
      color: ${(props) => props.theme.colors.primary};
      padding: 0.625rem 2.75rem;
      border: 2px solid ${(props) => props.theme.colors.primary};
    }
  }

  @media (max-width: 520px) {
    flex-direction: column;
    gap: 1rem;
  }
`
