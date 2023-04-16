import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'
import { AppProps } from 'next/app'
import { FC, useState } from 'react'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const lightTheme = {
  colors: {
    primary: '#018762',
    secondary: '#FFFFFF',
    text1: '#1F1F1F',
    text2: '#515151',
  },
}

export const darkTheme = {
  colors: {
    primary: '#018762',
    secondary: '#1F1F1F',
    text1: '#FFFFFF',
    text2: '#919191',
  },
}

const GlobalStyle = createGlobalStyle<{ theme: typeof lightTheme }>`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Nunito', sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  a {
    text-decoration: none;
  }

  body {
    background-color: ${(props) => props.theme.colors.secondary};
  }

  span img {
    pointer-events: none;
  }

  ::selection {
    color: #EEEEEE;
    background-color: #018762;
  }
`

const Toggle = styled.span`
  position: absolute;
  left: 45%;
  top: 1rem;
  cursor: pointer;

  @media (max-width: 900px) {
    left: 27%;
  }

  @media (max-width: 520px) {
    left: 5%;
    width: 20px;
  }
`

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  const [isDarkMode, setDarkMode] = useState(false)

  const handleDarkMode = () => setDarkMode(!isDarkMode)

  return (
    <>
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <GlobalStyle />
        <Toggle onClick={handleDarkMode}>
          <Image
            src={isDarkMode ? '/icons/on.svg' : '/icons/off.svg'}
            width={25}
            height={25}
            alt={isDarkMode ? 'Modo Claro' : 'Modo Escuro'}
          />
        </Toggle>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </>
  )
}

export default MyApp
