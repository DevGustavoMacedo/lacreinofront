import Link from 'next/link'
import * as S from './styled'

export default function Buttons() {
  return (
    <S.Buttons>
      <Link href="/pessoa-usuaria">Pessoa Usuária</Link>
      <Link href="/profissional">Profissional</Link>
    </S.Buttons>
  )
}
