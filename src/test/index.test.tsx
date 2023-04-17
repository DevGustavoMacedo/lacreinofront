import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import IconsList from '@/components/IconsList'

describe('Components', () => {
  it('should have 3 icons', () => {
    const { getAllByRole } = render(<IconsList />)

    expect(getAllByRole('img').length).toEqual(3)
  })

  it('images should have right alt', () => {
    render(<IconsList />)

    const images: HTMLImageElement[] = screen.getAllByRole('img')

    expect(images.map((image) => image.alt)).toEqual([
      'Instagram',
      'Facebook',
      'Linkedin',
    ])
  })

  it('should have 3 links', () => {
    const { getAllByRole } = render(<IconsList />)

    expect(getAllByRole('link').length).toEqual(3)
  })

  it('links should have right href', () => {
    render(<IconsList />)

    const links: HTMLAnchorElement[] = screen.getAllByRole('link')

    expect(links.map((item) => item.href)).toEqual([
      'https://www.instagram.com/lacrei.saude/',
      'https://www.facebook.com/lacrei.saude',
      'https://www.linkedin.com/company/lacrei',
    ])
  })
})
