import styled from 'styled-components'

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
