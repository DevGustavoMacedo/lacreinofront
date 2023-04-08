import Link from 'next/link'

import * as S from './styled'

import useNav from '@/hooks/useNav'

export default function Header() {
  const { pathname, navigation } = useNav()

  return (
    <S.Header>
      <Link href="/">
        <S.Logo>Lacrei</S.Logo>
      </Link>
      <S.Nav>
        {navigation.map((item) => (
          <Link key={item.name} href={item.href}>
            <S.Menu isActive={item.href === pathname}>{item.name}</S.Menu>
          </Link>
        ))}
      </S.Nav>
    </S.Header>
  )
}
