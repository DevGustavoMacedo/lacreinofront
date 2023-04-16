import Image from 'next/image'

// components
import Main from '@/components/Main'

export default function Profissional() {
  return (
    <Main
      title="Profissional"
      text="Buscamos recrutar pessoas profissionais da saúde que entendam as necessidades e se comprometam com o bem-estar da comunidade LGBTQIAPN+"
      image={
        <Image
          src="/assets/med-people.svg"
          width={540}
          height={421}
          alt="Pessoas com roupas médicas"
          priority={true}
        />
      }
    />
  )
}
