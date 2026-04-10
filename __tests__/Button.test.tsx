import { render, screen } from '@testing-library/react'
import { Button } from '@/components/Button'

describe('Button', () => {
  it('renders the correct label', () => {
    render(<Button label="Test Button" href="/test" variant="primary" />)
    expect(screen.getByText('Test Button')).toBeInTheDocument()
  })

  it('renders with correct href', () => {
    render(<Button label="Link" href="/target" variant="primary" />)
    const link = screen.getByRole('link', { name: /link/i })
    expect(link).toHaveAttribute('href', '/target')
  })

  it('applies basic unified styles for primary', () => {
    render(<Button label="Primary" href="/" variant="primary" />)
    const link = screen.getByRole('link')
    expect(link.className).toContain('border-ink')
  })

  it('applies basic unified styles for secondary', () => {
    render(<Button label="Secondary" href="/" variant="secondary" />)
    const link = screen.getByRole('link')
    expect(link.className).toContain('border-ink')
  })
})
