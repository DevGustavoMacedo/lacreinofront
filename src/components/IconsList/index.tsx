import Image from 'next/image'

export default function IconsList() {
  return (
    <>
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
    </>
  )
}
