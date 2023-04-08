import styled from 'styled-components'

export const Footer = styled.footer`
  margin: 0px 4rem;
  border-top: 1px solid #b0e0d3;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2rem 0 0.5rem;
  height: 10rem;

  p {
    font-size: 0.75rem;
    color: ${(props) => props.theme.colors.text2};
  }

  @media (max-width: 520px) {
    margin: 0px 1rem;
    padding-top: 1rem;
  }
`

export const Nav = styled.nav`
  display: flex;
  gap: 2.5rem;

  @media (max-width: 520px) {
    flex-direction: column;
    gap: 0.25rem;
  }
`

export const Menu = styled.a<{ isActive: boolean }>`
  font-size: 1rem;
  transition: all 0.2s ease 0s;
  cursor: pointer;
  color: ${(props) => props.theme.colors.text1};
  font-weight: ${(props) => (props.isActive ? 'bold' : 'normal')};

  :hover {
    opacity: 0.7;
  }

  @media (max-width: 520px) {
    font-size: 0.875rem;
  }
`

export const Icons = styled.div`
  display: flex;
  gap: 2rem;

  a:hover {
    opacity: 0.7;
  }
`
