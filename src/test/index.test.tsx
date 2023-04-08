import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import Paragraph from '@/components/Paragraph'
import IconsList from '@/components/IconsList'

describe('Components', () => {
  it('should have right text', () => {
    const { getByText } = render(<Paragraph />)

    expect(getByText('Desafio Front-end Lacrei'))
  })

  it('should have 3 links', () => {
    const { getAllByRole } = render(<IconsList />)

    expect(getAllByRole('link').length).toEqual(3)
  })

  it('should have 3 icons', () => {
    const { getAllByRole } = render(<IconsList />)

    expect(getAllByRole('img').length).toEqual(3)
  })

  it('has right links', () => {
    render(<IconsList />)

    const image: HTMLAnchorElement[] = screen.getAllByRole('link')

    expect(image.map((item) => item.href)).toEqual([
      'https://www.instagram.com/lacrei.saude/',
      'https://www.facebook.com/lacrei.saude',
      'https://www.linkedin.com/company/lacrei',
    ])
  })
})
