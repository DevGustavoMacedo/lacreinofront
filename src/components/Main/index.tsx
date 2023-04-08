import { ReactNode } from 'react'
import Head from 'next/head'
import * as S from './styled'
import useNav from '@/hooks/useNav'
import Buttons from '@/components/Buttons'

interface Props {
  title: string
  text: string
  image: ReactNode
}

export default function Main({ title, text, image }: Props) {
  const { pathname } = useNav()
  const isHome = pathname === '/'

  return (
    <S.Main>
      <div>
        <Head>
          <title>{`${isHome ? 'Home' : title} | Desafio Lacrei`}</title>
        </Head>
        <S.Title>{title}</S.Title>
        <S.Text isHome={isHome}>{text}</S.Text>
        {isHome && <Buttons />}
      </div>
      {image}
    </S.Main>
  )
}
