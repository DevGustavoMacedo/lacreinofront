import Link from 'next/link'

import * as S from './styled'

import useNav from '@/hooks/useNav'
import Image from 'next/image'

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
        <a
          href="https://www.instagram.com/lacrei.saude/"
          target="_blank"
          rel="noreferrer"
        >
          <Image
            src="/icons/instagram.svg"
            width={32}
            height={32}
            alt="Instagram"
          />
        </a>
        <a
          href="https://www.facebook.com/lacrei.saude"
          target="_blank"
          rel="noreferrer"
        >
          <Image
            src="/icons/facebook.svg"
            width={32}
            height={32}
            alt="Facebook"
          />
        </a>
        <a
          href="https://www.linkedin.com/company/lacrei"
          target="_blank"
          rel="noreferrer"
        >
          <Image
            src="/icons/linkedin.svg"
            width={32}
            height={32}
            alt="Linkedin"
          />
        </a>
      </S.Icons>
      <p>Desafio Front-end Lacrei</p>
    </S.Footer>
  )
}
