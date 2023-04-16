import Image from 'next/image'

// components
import Main from '@/components/Main'

export default function PessoaUsuaria() {
  return (
    <Main
      title="Pessoa Usuária"
      text="A Lacrei garante que pessoas LGBTQIAPN + recebam atendimento realizado por profissionais de qualidade e que atendam às suas necessidades de forma segura e acolhedora."
      image={
        <Image
          src="/assets/tech-people.svg"
          width={540}
          height={421}
          alt="Pessoas usando celulares"
          priority={true}
        />
      }
    />
  )
}
