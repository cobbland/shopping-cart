import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Home from '../src/components/Home';

describe('Home', () => {
  it('renders correct heading', () => {
    render(<Home />, {wrapper: BrowserRouter});
    expect(screen.getByRole("heading").textContent).toMatch(/home/i);
  });

  it('renders correct text', () => {
    render(<Home />, {wrapper: BrowserRouter});
    expect(screen.getByRole("paragraph").textContent).toMatch(/this is the home page./i);
  });
});