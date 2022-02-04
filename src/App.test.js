import { render, screen } from '@testing-library/react';
import PortalWeb from './App';

test('renders the twitter link', () => {
  render(<PortalWeb />);
  const linkElement = screen.getByText(/@portal_finance/i);
  expect(linkElement).toBeInTheDocument();
});
