import { render, screen } from '@testing-library/react'
import { Card } from '@/components/Card'

describe('Card', () => {
  it('renders the title and summary', () => {
    render(<Card title="Project X" summary="A cool project" href="/x" />)
    expect(screen.getByText('Project X')).toBeInTheDocument()
    expect(screen.getByText('A cool project')).toBeInTheDocument()
  })

  it('is a link to the correct href', () => {
    render(<Card title="Project X" summary="A cool project" href="/x" />)
    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('href', '/x')
  })
})
