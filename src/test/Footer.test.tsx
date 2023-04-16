import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import Footer from './Footer'

describe('Components', () => {
  it('should have 3 icons', () => {
    const { getAllByRole } = render(<Footer />)

    expect(getAllByRole('img').length).toEqual(3)
  })

  it('images should have right alt', () => {
    render(<Footer />)

    const images: HTMLImageElement[] = screen.getAllByRole('img')

    expect(images.map((image) => image.alt)).toEqual([
      'Instagram',
      'Facebook',
      'Linkedin',
    ])
  })

  it('should have 3 links', () => {
    const { getAllByRole } = render(<Footer />)

    expect(getAllByRole('link').length).toEqual(3)
  })

  it('links should have right href', () => {
    render(<Footer />)

    const links: HTMLAnchorElement[] = screen.getAllByRole('link')

    expect(links.map((item) => item.href)).toEqual([
      'https://www.instagram.com/lacrei.saude/',
      'https://www.facebook.com/lacrei.saude',
      'https://www.linkedin.com/company/lacrei',
    ])
  })
})
