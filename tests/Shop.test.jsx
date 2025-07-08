import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Shop from '../src/components/Shop';

describe('Shop', () => {
  it('renders correct heading', () => {
    render(<Shop />, {wrapper: BrowserRouter});
    expect(screen.getByRole("heading").textContent).toMatch(/shop/i);
  });

  it('renders correct text', () => {
    render(<Shop />, {wrapper: BrowserRouter});
    expect(screen.getByText(/this is the shop./i).textContent).toBeTruthy();
  });
});