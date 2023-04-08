import styled from 'styled-components'

export const Header = styled.header`
  width: 100%;
  background-color: ${(props) => props.theme.colors.secondary};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 4rem;
  font-weight: bold;

  @media (max-width: 1040px) {
    padding: 0.5rem 2rem;
  }

  @media (max-width: 520px) {
    padding: 0.5rem 1rem;
    flex-direction: column;
  }
`

export const Logo = styled.a`
  color: ${(props) => props.theme.colors.primary};
  font-size: 2rem;
  transition: all 0.2s ease 0s;
  cursor: pointer;

  :hover {
    opacity: 0.7;
  }
`

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  gap: 2.5rem;

  @media (max-width: 1040px) {
    gap: 2rem;
  }

  @media (max-width: 520px) {
    gap: 1rem;
  }
`

export const Menu = styled.a<{ isActive: boolean }>`
  color: ${(props) =>
    props.isActive ? props.theme.colors.primary : props.theme.colors.text1};
  font-size: 1rem;
  transition: all 0.2s ease 0s;
  cursor: pointer;

  :hover {
    opacity: 0.7;
  }

  @media (max-width: 520px) {
    font-size: 0.875rem;
  }
`
