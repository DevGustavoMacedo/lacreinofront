import Link from 'next/link'

import * as S from './styled'

import useNav from '@/hooks/useNav'

import IconsList from '@/components/IconsList'

export default function Footer() {
  const { pathname, navigation } = useNav()

  return (
    <S.Footer>
      <S.Nav>
        {navigation.map((item) => (
          <Link key={item.name} href={item.href}>
            <S.Menu isActive={item.href === pathname}>{item.name}</S.Menu>
          </Link>
        ))}
      </S.Nav>
      <S.Icons>
        <IconsList />
      </S.Icons>
      <p>Desafio Front-end Lacrei</p>
    </S.Footer>
  )
}
