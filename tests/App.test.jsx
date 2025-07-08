import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from '../src/App.jsx';

describe('App', () => {
  it('renders correct heading', () => {
    render(<App />, {wrapper: BrowserRouter});
    expect(screen.getByRole("heading").textContent).toMatch(/shopping cart/i);
  });

  it('renders correct nav', () => {
    render(<App />, {wrapper: BrowserRouter});
    expect(screen.getByText(/home/i)).toBeTruthy();
    expect(screen.getByText("Shop")).toBeTruthy();
    expect(screen.getByText("Cart (0)")).toBeTruthy();
  });
});