import Image from 'next/image'

// components
import Main from '@/components/Main'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Profissional() {
  return (
    <>
      <Header />
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
      <Footer />
    </>
  )
}
