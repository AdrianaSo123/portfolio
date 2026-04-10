import { render, screen } from '@testing-library/react'
import { SectionLabel } from '@/components/SectionLabel'

describe('SectionLabel', () => {
  it('renders children correctly', () => {
    render(<SectionLabel>Test Label</SectionLabel>)
    expect(screen.getByText('Test Label')).toBeInTheDocument()
  })

  it('applies basic styling classes', () => {
    const { container } = render(<SectionLabel>Styled</SectionLabel>)
    expect(container.firstChild).toHaveClass('uppercase', 'tracking-widest', 'text-muted')
  })

  it('merges custom classNames', () => {
    const { container } = render(<SectionLabel className="mt-10">Merged</SectionLabel>)
    expect(container.firstChild).toHaveClass('mt-10')
  })
})
