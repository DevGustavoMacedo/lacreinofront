import Image from 'next/image'

// components
import Main from '@/components/Main'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Header />
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
      <Footer />
    </>
  )
}
