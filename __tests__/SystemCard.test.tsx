import { render, screen } from '@testing-library/react';
import { SystemCard } from '@/components/SystemCard';

describe('SystemCard', () => {
  const mockProject = {
    id: 'test-project',
    title: 'Test Project',
    summary: 'A short summary',
    description: 'A much longer description paragraph verifying the text renders cleanly.',
    links: [
      { label: 'Live Link ↗', url: 'https://live.com' },
      { label: 'Source ↗', url: 'https://github.com' }
    ]
  };

  it('renders title and description correctly', () => {
    render(<SystemCard project={mockProject} />);
    expect(screen.getByText('Test Project')).toBeInTheDocument();
    expect(screen.getByText('A much longer description paragraph verifying the text renders cleanly.')).toBeInTheDocument();
  });

  it('renders all external links provided', () => {
    render(<SystemCard project={mockProject} />);
    const liveLink = screen.getByRole('link', { name: /live link ↗/i });
    const sourceLink = screen.getByRole('link', { name: /source ↗/i });
    
    expect(liveLink).toBeInTheDocument();
    expect(liveLink).toHaveAttribute('href', 'https://live.com');
    expect(sourceLink).toBeInTheDocument();
    expect(sourceLink).toHaveAttribute('href', 'https://github.com');
  });

  it('does not render link container if no links provided', () => {
    const noLinksProject = { ...mockProject, links: [] };
    const { container } = render(<SystemCard project={noLinksProject} />);
    
    // Links container uses border-t
    expect(container.querySelector('.border-t')).not.toBeInTheDocument();
  });
});
