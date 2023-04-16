import Image from 'next/image'

// components
import Main from '@/components/Main'

export default function Home() {
  return (
    <Main
      title="Boas vindas a Lacrei Saúde"
      text="Uma plataforma segura e acolhedora para comunidade LGBTQIAPN+"
      image={
        <Image
          src="/assets/med-person.svg"
          width={555}
          height={421}
          alt="Pessoa Médica com roupa verde"
          priority={true}
        />
      }
    />
  )
}
