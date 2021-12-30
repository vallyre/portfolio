import { render, screen } from '@testing-library/react';
import Portfolio from './Portfolio';

test('renders Vallyre text', () => {
  render(<Portfolio />);
  const devName = screen.getByText(/Vallyre Hyers/i);
  expect(devName).toBeInTheDocument();
});
