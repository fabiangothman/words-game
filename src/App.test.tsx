import { render } from '@testing-library/react';
import App from './App';

test('Validates squeleton existence', () => {
  const { getAllByTestId } = render(<App />);
  const app = getAllByTestId('squeleton');
  expect(app.length).toBe(1);
});
