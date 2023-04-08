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